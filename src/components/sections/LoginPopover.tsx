// components/LoginModal.tsx
"use client";

import { useState } from "react";

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Login
      </button>

      {/* Overlay + Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg"
            onClick={() => setOpen(false)} // click outside closes
          />

          {/* Modal content */}
          <div className="relative bg-black/45 z-10 w-80 rounded-xl p-6 backdrop-blur-sm border-spacing-0">
            <h3 className="text-lg font-semibold mb-4 text-center text-white">
              Sign in
            </h3>
            <form className="space-y-3">
              <h1 className="text-white text-sm">Email</h1>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <h1 className="text-white text-sm">Password</h1>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-sm text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
