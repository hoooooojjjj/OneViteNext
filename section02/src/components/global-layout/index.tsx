import { ReactNode } from "react";
import { Container, Footer, Header, Main } from "./styles";
import Link from "next/link";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </Header>
      <Main>{children}</Main>
      <Footer>제작 @sono</Footer>
    </Container>
  );
}

export default GlobalLayout;
