"use client";
import { FC, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
} from "@nextui-org/react";

interface TemplateProps {
  isOpen: boolean;
  co2emission: any;
  onClose: () => void;
}

const Template: FC<TemplateProps> = ({ isOpen, co2emission, onClose }) => {
  const [sectors_get, setSectors_get] = useState<any[]>([]);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/fetch/sectors")
      .then((res) => res.json())
      .then((data) => setSectors_get(data));
  }, []);

  const handleCheckboxChange = (sector: string) => {
    setSelectedSector((prev) => (prev === sector ? null : sector));
  };

  return (
    <Modal
      size="4xl"
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onClose}
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
      <ModalContent className="rounded-lg shadow-lg p-6">
        <ModalHeader className="text-xl font-semibold border-gray-200 border-b">
          Download Your Template
        </ModalHeader>
        <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {sectors_get.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox
                onChange={() => handleCheckboxChange(item.sector)}
                isDisabled={item.sector !== "Information and Communication"}
                className="text-green-600"
              >
                {item.sector}
              </Checkbox>
            </div>
          ))}
        </ModalBody>
        <ModalFooter className="flex justify-end space-x-4 border-gray-200 pt-4">
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color={
              selectedSector !== "Information and Communication"
                ? "default"
                : "primary"
            }
            isDisabled={selectedSector != "Information and Communication"}
            as="a"
            href="/template.xlsx"
            download
          >
            Download
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Template;
