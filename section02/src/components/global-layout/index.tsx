import { ReactNode } from "react";
import { Container, Footer, Header, Main, HeaderLink } from "./styles";
import Link from "next/link";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header>
        <HeaderLink href={"/"}>📚 ONEBITE BOOKS</HeaderLink>
      </Header>
      <Main>{children}</Main>
      <Footer>제작 @sono</Footer>
    </Container>
  );
}

export default GlobalLayout;
