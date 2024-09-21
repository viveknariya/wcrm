import BulkSender from "@/components/bulksender";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="w-2/12">
          <BulkSender />
        </div>
        <div className="w-10/12">{children}</div>
      </div>
    </>
  );
}
