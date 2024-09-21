"use client";

import { TestCredentialHandler } from "@/app/action";

export default function Home() {
  async function TestCredential() {
    const response = await TestCredentialHandler({});
    console.log(response);
  }
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Enter APP ID, BUSINESS ACCOUNT ID and TOKEN to verify
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="appid" className="sr-only">
              APP ID
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-green-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter APP ID"
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessid" className="sr-only">
              BUSINESS ACOUNT ID
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-green-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter BUSINESS ACOUNT ID"
              />
            </div>
          </div>

          <div>
            <label htmlFor="token" className="sr-only">
              TOKEN
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-green-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter TOKEN"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white"
              onClick={TestCredential}
            >
              Test
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
