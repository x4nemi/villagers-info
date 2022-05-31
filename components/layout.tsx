import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
//Diseño
/* Se supone que es donde está el título */
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className="max-w-6xl mx-auto p-5 my-8">{children}</div>;
};

export default Layout;
