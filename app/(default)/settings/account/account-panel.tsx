"use client";

import { useState } from "react";
import { useUserContext } from "@/app/(context)/userContext";
import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Skeleton } from "@nextui-org/skeleton";

export default function AccountPanel() {
  const { currentUser } = useUserContext() ?? {};
  const imageurl = currentUser?.imageUrl ?? "/images/user-avatar-80.png";
  // const unsafeData = currentUser?.unsafeMetadata ?? "User Role";

  const [companyName, setCompanyName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (currentUser && currentUser.unsafeMetadata) {
      // Set initial values from unsafeMetadata
      setCompanyName(currentUser.unsafeMetadata.companyName || "");
      setPostalCode(currentUser.unsafeMetadata.postalCode || "");
      setLocation(currentUser.unsafeMetadata.country || "");
      setEmail(currentUser.primaryEmailAddress || "");
      setRole(currentUser.unsafeMetadata.role);
    }
  }, [currentUser]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    try {
      // Update profile image with Clerk
      await currentUser?.setProfileImage({ file });
      setFile(null);
    } catch (error) {
      console.error("Error updating profile image:", error);
      alert("Failed to update profile image.");
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === "postalCode") {
      setPostalCode(value);
    } else if (id === "location") {
      setLocation(value);
    }
  };

  const handleSaveChanges = async () => {
    try {
      if (!currentUser) {
        throw new Error("No user is logged in");
      }
      console.log("here");
      const metadata = {
        unsafeMetadata: {
          role,
          postalCode,
          country: location,
        },
      };

      const response = await axios.post(
        `/api/updateMetadata?userId=${currentUser.id}`,
        metadata
      );
      console.log("Response", response);
    } catch (error) {
      console.error("Error updating user metadata:", error);
    }
  };

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
          My Account
        </h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              {!currentUser ? (
                <Skeleton className="w-24 h-24 rounded-full" />
              ) : (
                <img
                  className="w-24 h-24 rounded-full"
                  src={imageurl}
                  alt="User upload"
                />
              )}
            </div>
            <div className="flex items-center bg-green-500  rounded-md">
              <label
                htmlFor="file-upload"
                className="btn bg-gray-500 hover:bg-green-600 text-white cursor-pointer"
              >
                <span>
                  {uploading ? "Uploading..." : file ? "Remove" : "Select File"}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
              {file && <span className="ml-2 text-white">{file.name}</span>}
            </div>
            <button
              disabled={uploading || !file}
              onClick={handleUpload}
              className="btn-sm ml-4 bg-green-500 hover:bg-green-600 text-white"
            >
              {" "}
              {uploading ? "Uploading..." : "Change"}
            </button>
          </div>
        </section>
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            Role
          </h2>
          {/* {unsafeData ? (
        <pre>{JSON.stringify(unsafeData, null, 2)}</pre>
      ) : (
        <p>No unsafe data available</p>
      )} */}
          <div className="mt-5">
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Select Role
            </label>
            {!currentUser ? (
              <Skeleton className="w-32 h-8 rounded-lg" />
            ) : (
              <select
                id="role"
                value={role}
                onChange={handleRoleChange}
                className="form-input w-32 "
              >
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Accountant">Accountant</option>
              </select>
            )}
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            Organization Details
          </h2>
          {/* <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div> */}
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Organization Name
              </label>
              {!currentUser ? (
                <Skeleton className="w-full h-9 rounded-lg" />
              ) : (
                <input
                  id="company-name"
                  disabled
                  value={companyName}
                  className="form-input w-full bg-gray-100"
                  type="text"
                />
              )}
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="location"
              >
                Location
              </label>
              {!currentUser ? (
                <Skeleton className="w-full h-9 rounded-lg" />
              ) : (
                <input
                  id="location"
                  onChange={handleChange}
                  value={location}
                  className="form-input w-full"
                  type="text"
                />
              )}
            </div>
            {/* <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Postal Code
              </label>
              <input
                id="postalCode"
                onChange={handleChange}
                value={postalCode}
                className="form-input w-full"
                type="text"
              />
            </div> */}
            {/* <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                onChange={handleChange}
                value={location}
                className="form-input w-full"
                type="text"
              />
            </div> */}
          </div>
        </section>
        {/* Email */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            Email
          </h2>
          {/* <div className="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div> */}
          <div className="flex flex-wrap mt-5">
            <div className="mr-2">
              <label className="sr-only" htmlFor="email">
                Business email
              </label>
              {!currentUser ? (
                <Skeleton className="w-48 h-9 rounded-lg" />
              ) : (
                <input
                  id="email"
                  disabled
                  value={email}
                  className="form-input bg-gray-100"
                  type="email"
                />
              )}
            </div>
            {/* <button className="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-green-500">Change</button> */}
          </div>
        </section>
        {/* Password */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            Password
          </h2>
          <div className="text-sm">
            You can set a permanent password if you don't want to use temporary
            login codes.
          </div>
          <div className="mt-5">
            <Link href={"/reset-password"}>
              <button className="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-green-500">
                Set New Password
              </button>
            </Link>
          </div>
        </section>
        {/* Smart Sync */}
        {/* <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Smart Sync update for Mac</h2>
          <div className="text-sm">With this update, online-only files will no longer appear to take up hard drive space.</div>
          <div className="flex items-center mt-5">
            <div className="form-switch">
              <input type="checkbox" id="toggle" className="sr-only" checked={sync} onChange={() => setSync(!sync)} />
              <label className="bg-slate-400 dark:bg-slate-700" htmlFor="toggle">
                <span className="bg-white shadow-sm" aria-hidden="true"></span>
                <span className="sr-only">Enable smart sync</span>
              </label>
            </div>
            <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{sync ? 'On' : 'Off'}</div>
          </div>
        </section> */}
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="btn bg-black hover:bg-black text-white ml-3"
            >
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
