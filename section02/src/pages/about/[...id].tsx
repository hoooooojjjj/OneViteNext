import { useRouter } from "next/router";
import React from "react";

function index() {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      index
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

export default index;
