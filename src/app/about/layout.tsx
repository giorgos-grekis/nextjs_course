import React, { type PropsWithChildren } from "react";

const AboutLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>About Page Layout</h1>
      {children}
    </>
  );
};

export default AboutLayout;
