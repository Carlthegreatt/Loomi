// components/LoginPopover.tsx
"use client";

import { useState } from "react";

export default function LoginPopover() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Login
      </button>

      {/* Popover panel */}
      {open && (
        <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Sign in</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
