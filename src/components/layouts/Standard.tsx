// components/layout.js
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  // Children not among the FC type anymore, so must add it to the TS prop yourself
  children: React.ReactNode;
};

const Standard: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Standard;
