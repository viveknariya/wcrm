import "./globals.css";

export const metadata = {
  title: "CRM",
  description: "CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-12 h-screen">{children}</body>
    </html>
  );
}
