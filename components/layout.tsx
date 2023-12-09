import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
//Diseño
/* Se supone que es donde está el título */
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#B3E1B3] min-h-screen">
      <div className="max-w-6xl mx-auto p-5 ">{children}</div>
    </div>
  )
};

export default Layout;
