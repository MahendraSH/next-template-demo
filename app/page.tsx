import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background text-primary p-6">
      <h1 className="text-4xl font-extrabold mb-4">
        Welcome to Next 14 Demo App
      </h1>
      <p className="text-lg text-center mb-4">
        This is a Next 14 app with Orval and TanStack Query setup.
      </p>

      <p className="text-center flex items-center gap-2">
        This app uses a fake REST API from{" "}
        <Link
          className="text-blue-500 underline hover:text-blue-700"
          href="https://fakerestapi.azurewebsites.net/index.html"
          target="_blank"
        >
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default HomePage;
