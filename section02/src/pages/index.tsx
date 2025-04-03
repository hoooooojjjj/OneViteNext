import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import { AllBooksSection, Container, Header, RecommendSection } from "./styles";

export default function Home() {
  return (
    <Container>
      <RecommendSection>
        <Header>지금 추천하는 도서</Header>
      </RecommendSection>
      <AllBooksSection>
        <Header>등록된 모든 도서</Header>
      </AllBooksSection>
    </Container>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
