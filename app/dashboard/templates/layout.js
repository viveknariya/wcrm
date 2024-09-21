import Templates from "@/components/templates";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="w-2/12">
          <Templates />
        </div>
        <div className="w-10/12">{children}</div>
      </div>
    </>
  );
}
