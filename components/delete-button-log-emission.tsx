"use client";

import { useSelectedItems } from "@/app/selected-items-context";
import { deleteLogEmission } from "@/app/lib/actions";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export default function DeleteButtonLogEmission() {
  const { selectedItems, clearSelectedItems } = useSelectedItems();
  console.log(selectedItems);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    if (selectedItems.length === 0) return;

    try {
      await deleteLogEmission({ ids: selectedItems });
      clearSelectedItems(); // Clear selected items after deletion
      handleCloseModal(); // Close the modal after deletion
    } catch (error) {
      console.error("Error deleting API keys:", error);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          handleOpenModal(); // Open the modal
        }}
      >
        {selectedItems.length > 0 && (
          <input
            type="hidden"
            name="ids"
            value={JSON.stringify(selectedItems)}
          />
        )}
        <div className={`${selectedItems.length < 1 && "hidden"}`}>
          <div className="flex items-center">
            <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap">
              <span>{selectedItems.length}</span> items selected
            </div>
            <button
              type="submit"
              className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500"
            >
              Delete
            </button>
          </div>
        </div>
      </form>

      {/* Modal */}
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
                  your emissions.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={handleDelete}
                  className="text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
