import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "About",
}


const AboutLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>About Page Layout</h1>
      {children}
    </>
  );
};

export default AboutLayout;
