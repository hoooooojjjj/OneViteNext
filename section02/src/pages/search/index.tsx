import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode, useEffect } from "react";

async function getTime() {
  const time = await fetch("http://localhost:3000/api/time");
  const jsonData = await time.json();
  console.log(jsonData);
}

export default function Search() {
  useEffect(() => {
    getTime();
  }, []);
  return <div>Search</div>;
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
