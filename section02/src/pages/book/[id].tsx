import {
  ImgContainer,
  Img,
  Title,
  SubTitle,
  Author,
  Description,
} from "../../styles/book";
import { Container } from "../../styles";
import getInterFace from "@/api/instanse";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import { BookType } from "@/types";
import { useRouter } from "next/router";

// SSG를 통해 렌더링할 때 동적 경로 페이지에 대해 적용하기 위해서 미리 빌드타임에 생성할 path를 지정해줄 수 있음.
// 이러면 빌드 타임에 지정된 경로의 페이지는 미리 생성됨.
export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const targetBook = await getInterFace<BookType>(`book/${context.params!.id}`);

  return {
    props: { targetBook },
  };
};

export default function Book({
  targetBook,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>어쩌라고</div>;
  }
  if (!targetBook) {
    return null;
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } =
    targetBook;
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
