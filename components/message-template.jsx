import Link from "next/link";

export default function MessageTemplate({ linkContent }) {
  return (
    <article className="w-auto max-w-sm rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-xl hover:shadow-green-300  sm:p-6">
      <Link
        href="/receivers"
        className="mt-2 text-sm/relaxed text-gray-500 cursor-pointer flex"
        dangerouslySetInnerHTML={{ __html: linkContent }}
      ></Link>
    </article>
  );
}
