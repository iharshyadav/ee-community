"use client";

import { useState } from "react";
import { useUserContext } from "@/app/(context)/userContext";
import { useEffect, useMemo } from "react";
import axios from "axios";
import Toast03 from "@/components/toast-03";
import { Skeleton } from "@nextui-org/skeleton";

export default function TeamsPanel() {
  const { currentUser } = useUserContext() ?? {};
  const unsafeData = currentUser ?? "User Role";
  const [pendingInvites, setPendingInvites] = useState<any[]>([]);
  const [memberName, setMemberName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [role, setRole] = useState<string>("admin");
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastOpenrevoke, setToastOpenrevoke] = useState(false);
  const [loading, setLoading] = useState(true);
  const organization_id = useMemo(() => {
    return (
      unsafeData.organizationMemberships?.map(
        (membership: { organization: { id: string } }) =>
          membership.organization.id
      )[0] || ""
    );
  }, [unsafeData.organizationMemberships]);
  const adminrole =
    currentUser?.organizationMemberships?.[0]?.role ?? "No role";

  useEffect(() => {
    if (!organization_id) return;
    const fetchPendingInvites = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/organizationInvite`, {
          params: { organization_id },
        });
        console.log("🚀 ~ TeamsPanel ~ response", response);
        setPendingInvites(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching pending invites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingInvites();
  }, [organization_id, fetchTrigger]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === "memberName") {
      setMemberName(value);
    } else if (id === "email") {
      setEmail(value);
    }
  };
  // console.log("🚀 ~ TeamsPanel ~ organization_id:", organization_id)
  const handleUpload = async () => {
    if (memberName === "" || email === "" || role === "") {
      alert("Please fill all the fields");
      return;
    }
    setUploading(true);
    setLoading(true);

    // console.log("🚀 ~ handleUpload ~ organization_id:", organization_id)

    try {
      const response = await axios.post(`/api/organizationInvite`, {
        email,
        role,
        organization_id,
        memberName,
      });
      if (response.status === 200) {
        setToastOpen(true);
        setMemberName("");
        setEmail("");
        setRole("admin");
      }
    } catch (error) {
      console.error("Error sending invite:", error);
      alert("Failed to send invite.");
    } finally {
      setFetchTrigger((prev) => !prev);
      setUploading(false);
      setLoading(false);
    }
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const extractRole = (role: string) => {
    return role.split("org:")[1];
  };

  const handleRevoke = async (invitation_id: string) => {
    try {
      setFetchTrigger(true);
      const response = await axios.post(`/api/revokeInvite`, {
        invitation_id,
        organization_id,
      });
      if (response.status === 200) {
        setToastOpenrevoke(true);
      }
      console.log("🚀 ~ handleRevoke ~ response:", response);
    } catch (error) {
      console.error("Error revoking invite:", error);
      alert("Failed to revoke invite.");
    } finally {
      setFetchTrigger(false);
    }
  };

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="relative">
        <Toast03 type="success" open={toastOpen} setOpen={setToastOpen}>
          Invite sent successfully
        </Toast03>
        <Toast03
          type="success"
          open={toastOpenrevoke}
          setOpen={setToastOpenrevoke}
        >
          Invite revoke successfully
        </Toast03>
      </div>
      <div className="p-6 space-y-6 w-full">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
          Invite Members
        </h2>
        <section>
          {/* {unsafeData ? (
        <pre>{JSON.stringify(unsafeData, null, 2)}</pre>
        
      ) : (
        <p>No unsafe data available</p>
      )} */}

          <div className="sm:flex w-full sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="w-1/4 lg:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Member Name
              </label>
              <input
                id="memberName"
                onChange={handleChange}
                value={memberName}
                className="form-input w-11/12 lg:w-full"
                type="text"
              />
            </div>
            <div className="w-2/5 lg:w-1/2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Mail_ID
              </label>
              <input
                id="email"
                onChange={handleChange}
                value={email}
                className="form-input w-full"
                type="email"
              />
            </div>
            <div className="w-1/4">
              <label className="block text-sm font-medium mb-1" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={handleRoleChange}
                className="form-input w-36 "
              >
                <option value="admin">Admin</option>
                <option value="member">Member</option>
              </select>
            </div>
            {adminrole === "org:admin" && (
              <div className="w-1/5 lg:w-1/4">
                <button
                  disabled={uploading}
                  onClick={handleUpload}
                  className="btn mt-5 bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  {" "}
                  {uploading ? "Sending..." : "Invite"}
                </button>
              </div>
            )}
          </div>
        </section>
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-semibold mb-4">
          Pending Invites
        </h3>
        {loading ? (
          // Skeleton for loading state
          <>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-4"
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
                  <Skeleton className="w-44 h-9 rounded-lg" />
                </div>
                {adminrole === "org:admin" && (
                  <div className="sm:w-1/4">
                    <Skeleton className="w-20 mt-4 h-10 rounded-lg" />
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          pendingInvites.length > 0 && (
            <section className="mt-8">
              {pendingInvites.map((invite) => (
                <div
                  key={invite.id}
                  className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4"
                >
                  <div className="w-1/4 lg:w-1/3">
                    <label className="block text-sm font-medium mb-1">
                      Member Name
                    </label>
                    <input
                      value={invite.public_metadata.memberName}
                      className="form-input w-11/12 lg:w-full bg-gray-100"
                      type="text"
                      disabled
                    />
                  </div>
                  <div className="w-2/5 lg:w-1/2">
                    <label className="block text-sm font-medium mb-1">
                      Mail_ID
                    </label>
                    <input
                      value={invite.email_address}
                      className="form-input w-full bg-gray-100"
                      type="email"
                      disabled
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-sm font-medium mb-1">
                      Role
                    </label>
                    <input
                      value={extractRole(invite.role)}
                      className="form-input w-11/12 lg:w-36 bg-gray-100"
                      type="text"
                      disabled
                    />
                  </div>
                  {adminrole === "org:admin" && (
                    <div className="w-1/5 lg:w-1/4">
                      <button
                        onClick={() => handleRevoke(invite.id)}
                        className="btn bg-red-500 hover:bg-red-600 mt-6 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </section>
          )
        )}
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
