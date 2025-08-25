// components/LoginModal.tsx
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SignupModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <Button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-neutral-400"
      >
        Sign Up
      </Button>

      {/* Overlay + Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg"
            onClick={() => setOpen(false)} // click outside closes
          />

          <div className="relative bg-[#171717] z-10 w-96 rounded-xl p-6 backdrop-blur-sm border-spacing-0">
            <h3 className="text-lg font-semibold mb-4 text-center text-white">
              Sign Up
            </h3>

            <form className="space-y-3">
              <h1 className="text-white text-sm">Email</h1>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full text-sm bg-[#212121] text-white px-3 py-2 border rounded-md focus:outline-1"
              />
              <div className="flex justify-between">
                <h1 className="text-white text-sm">Password</h1>
              </div>

              <input
                type="password"
                className="w-full text-sm bg-[#212121] text-white px-3 py-2 border rounded-md focus:outline-1 "
              />
              <div className="flex justify-between">
                <h1 className="text-white text-sm"> Confirm Password</h1>
              </div>

              <input
                type="confirm password"
                className="w-full text-sm bg-[#212121] text-white px-3 py-2 border rounded-md focus:outline-1 "
              />

              <button
                type="submit"
                className="w-full text-sm bg-white text-black py-2 rounded-md hover:bg-neutral-300"
              >
                Sign In
              </button>

              <div className="flex justify-center">
                <h1 className="text-white text-sm mt-2 opacity-45 underline">
                  or
                </h1>
              </div>

              <div className="flex justify-center p-2">
                <Button className="bg-transparent shadow-none">
                  <FaGoogle className="h-5 w-5" />
                </Button>
                <Button className="bg-transparent shadow-none">
                  <FaGithub className="h-5 w-5"></FaGithub>
                </Button>
              </div>
            </form>
            {
              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-xs text-gray-500 hover:underline"
              >
                Already have an account?
              </button>
            }
          </div>
        </div>
      )}
    </>
  );
}
