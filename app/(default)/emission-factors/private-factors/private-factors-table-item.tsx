import { Privatefactor } from "./private-factors-table";
import { deletePrivateEmission } from "@/app/lib/actions";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface PrivateFactorsTableItemProps {
  privatefactor: Privatefactor;
  count: number;
  onCheckboxChange: (id: number, checked: boolean) => void;
  isSelected: boolean;
}

export default function PrivateFactorsTableItem({
  privatefactor,
  onCheckboxChange,
  isSelected,
}: PrivateFactorsTableItemProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(privatefactor.id, e.target.checked);
  };

  console.log(privatefactor);

  const handleDelete = async () => {
    if (privatefactor.id === 0) return;

    try {
      await deletePrivateEmission({ ids: privatefactor.id });
      // Clear selected items after deletion
    } catch (error) {
      console.error("Error deleting Private Emission Factor:", error);
    }
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              className="form-checkbox"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isSelected}
            />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.sector}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.category}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.region_name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.year}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.source}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.emission_factor}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{privatefactor.unit}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <button
          onClick={onOpen}
          className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
        >
          <svg
            className="w-3 h-4 fill-current text-rose-500 shrink-0"
            viewBox="0 0 16 16"
          >
            <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
          </svg>
        </button>

        {/* Modal backdrop animation */}
        <Modal
          size="md"
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
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
                    your emission factor.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent the default form submission behavior
                      handleDelete(); // Call deleteApikey with an object containing the array of selectedItems
                    }}
                  >
                    <Button
                      type="submit"
                      className="text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                    >
                      Confirm
                    </Button>
                  </form>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </td>
    </tr>
  );
}
