"use client";

import { useParams } from "next/navigation";

const Example = () => {
  const params = useParams();

  return <div>{params.slug}</div>;
};

export default Example;
