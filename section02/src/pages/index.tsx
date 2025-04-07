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

// SSG로 페이지를 렌더링하는 방법
// 유저가 접속 요청을 보내기도 전인 빌드 타임에 미리 데이터를 fetching하고 html을 생성해놓는 렌더링 방식 -> 매우 빠르게 렌더링 가능
// 그러나 당연히 클라이언트 측에서 동적으로 변할 수 있는 페이지는 사용하면 안됨.
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
