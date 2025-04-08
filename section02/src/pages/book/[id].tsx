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
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BookType } from "@/types";
import { useRouter } from "next/router";

// SSG를 통해 렌더링할 때 동적 경로 페이지에 대해 적용하기 위해서 미리 빌드타임에 생성할 path를 지정해줄 수 있음.
// 이러면 빌드 타임에 지정된 경로의 페이지는 미리 생성됨.
export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
    // fallback : false -> 미리 정해둔 경로가 아니면 404 페이지
    // fallback : "blocking" -> 미리 정해둔 경로가 아니면 SSR 방식으로 생성 후 렌더링, 이때 static하게 서버에 저장 후 이후 요청 부턴 SSG로 응답
    // fallback : true -> blocking + SSR 방식으로 생성 시 응답이 길어질 때 피드백을 주기 위해 fallback 페이지를 보여줬다가 생성 후 해당 페이지 렌더링
    // fallback 페이지는 static 페이지에서 props가 전달되지 않은 상태(데이터 fetching 상태 등), 이때 로딩 인디케이터등을 보여준 후에 페이지 전체 렌더링을 해서 UX 향상 가능
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
