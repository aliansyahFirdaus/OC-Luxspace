import { Link } from "react-router-dom";

import React from "react";

export default function ErrorPage({ code = 404, message = "Page not found" }) {
  return (
    <section className="">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-9xl font-semibold mb-6">{code}</h2>
            <p className="text-lg mb-12">{message}</p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
