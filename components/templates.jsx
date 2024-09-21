"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Templates() {
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
                href="/dashboard/templates/listoftemplates"
                className={`${getClassName(
                  "/dashboard/templates/listoftemplates"
                )} block rounded-lg px-4 py-2 text-sm font-medium text-gray-700`}
              >
                Templates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
