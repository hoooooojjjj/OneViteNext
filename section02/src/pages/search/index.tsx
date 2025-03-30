import React, { useEffect } from "react";

async function getTime() {
  const time = await fetch("http://localhost:3000/api/time");
  const jsonData = await time.json();
  console.log(jsonData);
}

function Search() {
  useEffect(() => {
    getTime();
  }, []);
  return <div>Search</div>;
}

export default Search;
