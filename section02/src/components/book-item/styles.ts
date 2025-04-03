import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled(Link)({
  display: "flex",
  gap: 15,
  padding: "20px 10px",
  borderBottom: "1px solid rgb(220,220,220)",
  textDecoration: "none",
  color: "black",
});

export const Img = styled.img({
  width: 80,
});

export const Title = styled.div({
  fontWeight: "bold",
});

export const SubTitle = styled.div({
  wordBreak: "keep-all",
});

export const Author = styled.div({
  color: "gray",
});
