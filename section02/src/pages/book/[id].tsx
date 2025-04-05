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
import getInterFace from "@/api/instanse";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { BookType } from "@/types";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const targetBook = await getInterFace<BookType>(`book/${context.params!.id}`);

  return {
    props: { targetBook },
  };
};

export default function Book({
  targetBook,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!targetBook) {
    return null;
  }

  const {
    id: bookId,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = targetBook;
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
