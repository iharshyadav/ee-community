// @ts-nocheck

"use client";

import { addApikey } from "@/app/lib/actions";
import { IoAddCircleOutline } from "react-icons/io5";
import { ScopeContext } from "@/app/(context)/ScopeContext";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Label,
} from "@nextui-org/react";

import { useState, useContext } from "react";

import React from "react";

import { fetchEmissionMetadata } from "../../../lib/data";

const Addapikeys = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setname] = useState("");
  const [open, setOpen] = useState(false);
  const { setToggleSkeloton } = useContext(ScopeContext);
  // const emissionFactors =  fetchEmissionMetadata()
  // console.log(emissionFactors.sectors)

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setToggleSkeloton(true);
    try {
      const createdApiKey = await addApikey({ name });

      // Clear the input value after successful API key creation
      setname("");
      setOpen(false);
      setToggleSkeloton(false);
    } catch (error) {
      console.error("Error creating API key:", error);
      // Handle the error, e.g., show an error notification
      // toast.error('Error creating API key');
    }
  };

  return (
    <div>
      <button
        onClick={onOpen}
        // className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
      >
        <svg
          className="w-4 h-4 fill-current opacity-50 shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span className="hidden xs:block ml-2">Add New</span>
      </button>
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
              <ModalHeader className="flex flex-col gap-1 w-96">
                New API Key
              </ModalHeader>
              <form
                onSubmit={formSubmitHandler}
                className="flex flex-col gap-6"
              >
                <ModalBody>
                  <label className="text-sm">
                    New API keys can take up to a few minutes to come into
                    effect.
                  </label>
                  <input
                    id="action-search"
                    className="form-input bg-white dark:bg-slate-800"
                    type="search"
                    placeholder="Enter API Key Name"
                    onChange={(event) => setname(event.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className={`text-white ${
                      name.length >= 3
                        ? "bg-black hover:bg-black cursor-pointer"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    onPress={onClose}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Addapikeys;
