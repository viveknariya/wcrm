import Navigation from "@/components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-12 h-screen">
        <div className="col-span-3">
          <Navigation />
        </div>
        <div className="col-span-9">{children}</div>
      </body>
    </html>
  );
}
