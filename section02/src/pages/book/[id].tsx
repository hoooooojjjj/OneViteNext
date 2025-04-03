import books from "@/mock/books.json";
import { useRouter } from "next/router";
import {
  ImgContainer,
  Img,
  Title,
  SubTitle,
  Author,
  Description,
} from "./styles";
import { Container } from "../styles";

export default function Book() {
  const router = useRouter();
  const id = router.query.id;

  const {
    id: bookId,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = books[0];
  return (
    <Container>
      <ImgContainer coverImgUrl={coverImgUrl}>
        <Img src={coverImgUrl}></Img>
      </ImgContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Author>
        {author} | {publisher}
      </Author>
      <Description>{description}</Description>
    </Container>
  );
}
