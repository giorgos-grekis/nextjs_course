import type { Metadata } from "next";
import React from "react";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#file-based-metadata

export async function generateMetadate({params}): Promise<Metadata> {
  // fetch('url', params)
  
  return {title: "cisu"}
}

// export const metadata: Metadata = {
//   description: "About Desc",
//   openGraph: {
//     type: "profile",
//     lastName:"test",
//     firstName: "cisu"
//   }
// };

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
