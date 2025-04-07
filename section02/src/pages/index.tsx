import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import {
  AllBooksSection,
  Container,
  Header,
  RecommendSection,
} from "../styles";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import { BookType } from "@/types";
import getInterFace from "@/api/instanse";

export const getStaticProps = async () => {
  console.log("인덱스 페이지");
  const [randomBooks, AllBooks] = await Promise.all([
    await getInterFace<BookType[]>("book/random"),
    await getInterFace<BookType[]>("book/random"),
  ]);
  return {
    props: { randomBooks, AllBooks },
  };
};

export default function Home({
  randomBooks,
  AllBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!randomBooks || !AllBooks) {
    return null;
  }

  return (
    <Container>
      <RecommendSection>
        <Header>지금 추천하는 도서</Header>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </RecommendSection>
      <AllBooksSection>
        <Header>등록된 모든 도서</Header>
        {AllBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </AllBooksSection>
    </Container>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
