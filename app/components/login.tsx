"use client";

import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-purple-600">Login to EventHub</h2>
        <p className="text-gray-500 text-center mt-2">Sign in with Google to continue</p>
        
        <button
          className="w-full flex items-center justify-center bg-white border py-2 mt-6 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          <FcGoogle className="w-6 h-6 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
