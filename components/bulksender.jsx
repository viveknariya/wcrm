"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BulkSender() {
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
                href="/dashboard/bulksender/selecttemplate"
                className={`${getClassName(
                  "/dashboard/bulksender/selecttemplate"
                )} block rounded-lg px-4 py-2 text-sm font-medium text-gray-700`}
              >
                Select Template
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
