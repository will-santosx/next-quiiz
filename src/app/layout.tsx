import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Quiiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ubuntu.className} antialiased bg-neutral-black/20 relative h-screen`}
      >
        <div className="w-full h-full px-5 custom-lg:w-[415px] rounded-md bg-neutral-white mx-auto pt-[30px] flex flex-col items-center text-center">
          {children}
        </div>
        <div className="absolute w-full text-center bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <span className="text-neutral-black">
            designed and developed by willians santos &copy; 2024
          </span>
        </div>
      </body>
    </html>
  );
}
