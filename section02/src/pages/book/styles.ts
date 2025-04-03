import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImgContainer = styled.div<{ coverImgUrl: string }>`
  background-image: url(${(props) => props.coverImgUrl});
  display: flex;
  justify-content: center;
  padding: 20px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: "";
  }
`;

export const Img = styled.img`
  z-index: 1;
  max-height: 350px;
  height: 100%;
`;

export const Title = styled.div({
  fontSize: "large",
  fontWeight: "bold",
});

export const SubTitle = styled.div({
  color: "gray",
});

export const Author = styled.div({
  color: "gray",
});

export const Description = styled.div({
  backgroundColor: "rgb(245,245,245)",
  padding: 15,
  lineHeight: 1.3,
  whiteSpace: "pre-line",
  borderRadius: 5,
});
