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
    // revalidate: 3, // ISR(증분 정적 생성 방식) -> 기존 SSG는 한 번 빌드타임에 생성된 이후 재생성되지 않고 모든 요청에 대해 동일한 페이지를 반환함.
    // 그러나 ISR을 사용하면, 초반에는 SSG처럼 빌드 타임에 생성된 페이지를 반환하다가 재검증 시간이 초과된 이후부턴 들어온 요청에 대해 새롭게 페이지를 생성하여 반환함.
  };
};

export default function Home({
  randomBooks,
  AllBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!randomBooks || !AllBooks) {
    return null;
  }

  const handleRevalidate = async () => {
    const revalidate = await fetch("http://localhost:3000/api/revalidate");
    const res = revalidate.json();
    console.log(res);
  };

  return (
    <Container>
      <RecommendSection>
        <button onClick={handleRevalidate}>revalidate</button>
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
