import { useRouter } from "next/router";
import React from "react";

function BookPage() {
  const router = useRouter();
  const id = router.query.id;
  console.log(router.query);

  return <div>BookPage {id}</div>;
}

export default BookPage;
