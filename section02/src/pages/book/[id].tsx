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
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { BookType } from "@/types";

// SSR을 활용할 수 있는 함수
// 해당 page로 요청이 들어온 경우 서버에서 js를 실행시킬 때 같이 서버에서 실행됨.
// 컴포넌트가 렌더링(클라이언트에서 === 수화단계)되기 전에 데이터를 fetch하여 가져오고, 이를 초기 렌더링 시 props로 전달받을 수 있음
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
  // window.alert(); -> 이런 식으로 컴포넌트에서 브라우저(클라이언트)에서만 가능한 코드를 작성하면 - ReferenceError: window is not defined 에러가 발생함.
  // 즉, 기본적으로 next는 서버에서 먼저 js를 실행시키기 때문에 이 과정에서 window 객체를 찾을 수가 없기 때문

  // 가장 기본적인 해결법은 useEffect를 사용하면 컴포넌트가 마운트된 이후 코드가 실행되기 때문에 window 객체를 찾을 수 있음
  // useEffect(() => {
  //   window.alert();
  // }, []);
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
