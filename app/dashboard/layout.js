import Navigation from "@/components/navigation";

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="w-full">{children}</div>
    </>
  );
}
