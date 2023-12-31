import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fut-App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <header className='flex justify-between h-16 items-center bg-zinc-800'>
          <div>
            <h1>logo</h1>
          </div>
          <nav className='flex justify-around w-10/12'>
            <ul>
              <li>All teams</li>
            </ul>
            <ul>
              <li>All teams</li>
            </ul>
            <ul>
              <li>All teams</li>
            </ul>
          </nav>
        </header>
        <div className='flex-grow'> {children}</div>
        <footer className='bg-gray-700 text-center py-1'>Footer</footer>
      </body>
    </html>
  );
}
