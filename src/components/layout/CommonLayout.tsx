import type { ReactNode } from "react"
import Footer from "../pagescomponet/Footer";
import Navbar from "../pagescomponet/Navbar";

interface IProps {
    children : ReactNode
}

function CommonLayout({children}:IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
     <Footer />
    </div>
  );
}

export default CommonLayout
