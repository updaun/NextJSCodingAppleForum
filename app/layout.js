import { Inter, Signika_Negative } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar"> 
        <Link href="/" className="logo">Appleforum</Link> 
        <Link href="/list">List</Link>
        {/* 3항 연산자로 로그인 로그아웃 버튼 */}
        {session?.user ? <Link href="/write">Write</Link> : null}
        {session?.user ? <Link href="/api/auth/signout">Signout</Link> : <LoginBtn/>}
      </div>  
        {children}
      </body>
    </html>
  );
}
