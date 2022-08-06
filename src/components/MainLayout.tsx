import type {  ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Header />
        { children }
      <Footer />
    </div>
  )
}

export default MainLayout;