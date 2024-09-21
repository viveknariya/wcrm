import Settings from "@/components/settings";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="w-2/12">
          <Settings />
        </div>
        <div className="w-10/12">{children}</div>
      </div>
    </>
  );
}
