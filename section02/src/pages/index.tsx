import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import { AllBooksSection, Container, Header, RecommendSection } from "./styles";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <Container>
      <RecommendSection>
        <Header>지금 추천하는 도서</Header>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </RecommendSection>
      <AllBooksSection>
        <Header>등록된 모든 도서</Header>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </AllBooksSection>
    </Container>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
