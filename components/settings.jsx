"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Settings() {
  const pathname = usePathname();

  const getClassName = (path) => {
    return pathname === path ? "bg-gray-100" : "";
  };
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-14 space-y-1">
            <li>
              <Link
                href="/dashboard/settings/credentials"
                className={`${getClassName(
                  "/dashboard/settings/credentials"
                )} block rounded-lg px-4 py-2 text-sm font-medium text-gray-700`}
              >
                Credentials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
