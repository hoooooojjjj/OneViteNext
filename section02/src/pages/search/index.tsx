import React from "react";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();

  const q = router.query.q;
  return (
    <>
      <h1>Search {q}</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        메인으로
      </button>
    </>
  );
}

export default Search;
