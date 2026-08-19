import NavBar from "@/Components/ui/NavBar";
import "@/app/global.css";

export const metadata = {
  title: "STEM Hub Scotland",
  description: "Connecting STEM education across Scotland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="flex flex-col h-screen">
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
