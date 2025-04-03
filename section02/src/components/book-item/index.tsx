import type { BookItem } from "@/types";
import { Author, Container, Img, SubTitle, Title } from "./styles";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookItem) {
  return (
    <Container href={`/book/${id}`}>
      <Img src={coverImgUrl}></Img>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <br />
        <Author>
          {author} | {publisher}
        </Author>
      </div>
    </Container>
  );
}
