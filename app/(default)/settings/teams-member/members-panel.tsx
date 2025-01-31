"use client";

import { useState } from "react";
import { useUserContext } from "@/app/(context)/userContext";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { Skeleton } from "@nextui-org/skeleton";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function TeamsPanel() {
  const { currentUser } = useUserContext() ?? {};
  const role = currentUser?.organizationMemberships?.[0]?.role ?? "No role";
  console.log("🚀 ~ TeamsPanel ~ role", role);
  const unsafeData = currentUser ?? "User Role";
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [member_id, setMemberId] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState(0);
  const organization_id = useMemo(() => {
    return (
      unsafeData.organizationMemberships?.map(
        (membership: { organization: { id: string } }) =>
          membership.organization.id
      )[0] || ""
    );
  }, [unsafeData.organizationMemberships]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = async (member_id: string) => {
    setIsOpen(true);
    setMemberId(member_id);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setMemberId("");
  };

  useEffect(() => {
    if (!organization_id) return;
    const fetchPendingInvites = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/getMember`, {
          params: { organization_id },
        });
        console.log("🚀 ~ TeamsPanel ~ response", response?.data?.data);
        setMembers(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching pending invites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingInvites();
  }, [organization_id, deleteTrigger]);

  const extractRole = (role: string) => {
    return role.split("org:")[1];
  };

  const handleDelete = async (member_id: string) => {
    if (!member_id) return;
    try {
      const respo̥nse = await axios.delete(`/api/getMember`, {
        params: { organization_id, member_id },
      });
      console.log("🚀 ~ handleDelete ~ respo̥nse:", respo̥nse);
      setDeleteTrigger((prev) => prev + 1);
    } catch (error) {
      console.error("Error deleting member:", error);
    } finally {
      handleCloseModal();
    }
  };

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="relative"></div>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
          Team Members
        </h2>
        {/* {unsafeData ? (
            <pre>{JSON.stringify(unsafeData, null, 2)}</pre>
        
            ) : (
        <p>No unsafe data available</p>
          )} */}

        <section className="mt-8 w-full">
          {loading ? (
            // Skeleton for loading state
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="sm:flex sm:items-center space-y-4 sm:space-y-2 sm:space-x-4 mb-4"
                >
                  <div className="sm:w-1/3 space-y-2">
                    <Skeleton className="h-3 w-32  rounded-lg" />
                    <Skeleton className="w-full h-9 rounded-lg" />
                  </div>
                  <div className="sm:w-1/2 space-y-2">
                    <Skeleton className="h-3 w-32  rounded-lg" />
                    <Skeleton className="w-full h-9 rounded-lg" />
                  </div>
                  <div className="sm:w-1/3 space-y-2">
                    <Skeleton className="h-3 w-32  rounded-lg" />
                    <Skeleton className="w-full h-9 rounded-lg" />
                  </div>
                  {role === "org:admin" && (
                    <div className="sm:w-1/4 space-y-2">
                      <Skeleton className="w-24 mt-4 h-9 rounded-lg" />
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            members.map((invite) => (
              <div
                key={invite.id}
                className="sm:flex sm:items-center space-y-4 sm:space-y-0 space-x-4 lg:space-x-8 mb-4"
              >
                <div className="w-1/4 lg:w-1/3">
                  <label className="block text-sm font-medium mb-1">
                    Member Name
                  </label>
                  <input
                    value={
                      invite.public_user_data.first_name +
                      " " +
                      invite.public_user_data.last_name
                    }
                    className="form-input  w-11/12 lg:w-full bg-gray-100"
                    type="text"
                    disabled
                  />
                </div>
                <div className="w-2/5 lg:w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    Mail_ID
                  </label>
                  <input
                    value={invite.public_user_data.identifier}
                    className="form-input w-full bg-gray-100"
                    type="email"
                    disabled
                  />
                </div>
                <div className="w-1/4">
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <input
                    value={extractRole(invite.role)}
                    className="form-input w-11/12 lg:w-full bg-gray-100"
                    type="text"
                    disabled
                  />
                </div>
                {role === "org:admin" && (
                  <div className="w-1/5 lg:w-1/4">
                    <button
                      onClick={() =>
                        handleOpenModal(invite.public_user_data.user_id)
                      }
                      className="btn bg-red-500 hover:bg-red-600 mt-6 text-white"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </section>
        <Modal
          size="md"
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={handleCloseModal}
          placement="top-center"
          classNames={{
            backdrop:
              "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold">
                  Are you absolutely sure?
                </ModalHeader>
                <ModalBody>
                  <p className="font-medium">
                    This action cannot be undone. This will permanently delete
                    this member.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={() => handleDelete(member_id)}
                    className="text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                  >
                    Confirm
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
              Cancel
            </button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
