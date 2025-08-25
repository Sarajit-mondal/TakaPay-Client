import type { ReactNode } from "react"
import Footer from "../pagescomponet/Footer";
import Navbar from "../pagescomponet/navBar";

interface IProps {
    children : ReactNode
}

function CommonLayout({children}:IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1">{children}</div>
     <Footer />
    </div>
  );
}

export default CommonLayout
