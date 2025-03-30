import { useRouter } from "next/router";
import React from "react";

function About() {
  const router = useRouter();

  return (
    <div>
      about
      <button
        onClick={() => {
          router.back();
        }}
      >
        go back
      </button>
    </div>
  );
}

export default About;
