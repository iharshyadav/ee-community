"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import { handleSubmit } from "@/lib/createpost";

export function CreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<File | null>(null);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState<string[]>([""]);

  const addLinkInput = () => {
    setLinks([...links, ""]);
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const removeLinkInput = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="font-semibold h-9 w-40 rounded-2xl"
        startContent={<PlusCircle className="h-5 w-5" />}
        size="lg"
      >
        Create Post
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpen}
        size="2xl"
        classNames={{
          base: "bg-[#0F172A] text-white",
          header: "border-b border-[#334155]",
          body: "py-6",
          footer: "border-t border-[#334155]",
          closeButton: "hover:bg-white/10 active:bg-white/30",
        }}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData,links);
          }}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">Create New Post</h2>
              <p className="text-sm text-gray-400">
                Share your thoughts with the world
              </p>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="topic">
                      Topic
                    </label>
                    <input
                      id="topic"
                      name="topic"
                      className="form-input text-sm w-full bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 border border-slate-700 text-white placeholder-slate-400"
                      type="text"
                      placeholder="What's your post about?"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-input text-sm w-full bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 border border-slate-700 text-white placeholder-slate-400 min-h-[120px] resize-y"
                      placeholder="Write your post content here..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="topic">
                      Links
                    </label>
                    {links.map((link, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          id={`link-${index}`}
                          name={`link-${index}`}
                          className="form-input text-sm w-full bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 border border-slate-700 text-white placeholder-slate-400"
                          type="text"
                          placeholder={`Link ${index + 1}`}
                          value={link}
                          onChange={(e) =>
                            handleLinkChange(index, e.target.value)
                          }
                          required
                        />
                        {index >= 0 && (
                          <Button
                            color="danger"
                            variant="flat"
                            onPress={() => removeLinkInput(index)}
                            className="ml-2 font-medium"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      color="primary"
                      onPress={addLinkInput}
                      className="font-medium shadow-lg shadow-primary/30"
                    >
                      Add Link
                    </Button>
                  </div>
                  <div className="relative w-full">
                    <label className="sr-only" htmlFor="image">
                      Upload Image
                    </label>
                    <div className="flex items-center w-full bg-slate-800/30 border border-slate-700 text-white rounded-lg overflow-hidden">
                      <div className="px-3 py-2 bg-slate-800/50 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-slate-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 16.5V19a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-2.5M16.5 7.5L12 3 7.5 7.5M12 3v13"
                          />
                        </svg>
                      </div>
                      <input
                        id="image"
                        type="file"
                        name="file"
                        className="form-input text-sm w-full bg-transparent text-white placeholder-slate-400 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        // onChange={(e) => {
                        //   if (e.target.files && e.target.files.length > 0) {
                        //     setImage(e.target.files[0]);
                        //   }
                        // }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                className="font-medium"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                type="submit"
                className="font-medium shadow-lg shadow-primary/30"
              >
                Create Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
