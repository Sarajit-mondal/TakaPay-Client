import type { ReactNode } from "react"

interface IProps {
    children : ReactNode
}

function CommonLayout({children}:IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <div>Nabar</div>
      <div className="grow-1">{children}</div>
      <div>Footer</div>
    </div>
  );
}

export default CommonLayout
