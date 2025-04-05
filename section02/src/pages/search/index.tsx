import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import getInterFace from "@/api/instanse";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { BookType } from "@/types";

// context 라는 인자로 현재 페이지의 요청에 대한 모든 데이터를 가져올 수 있다
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const targetBooks = await getInterFace<BookType[]>(
    `book/search?q=${context.query.q}`
  );
  return {
    props: { targetBooks },
  };
};

export default function Search({
  targetBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!targetBooks) {
    return null;
  }
  return (
    <div>
      {targetBooks.map((book) => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
