import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div({
  backgroundColor: "white",
  maxWidth: 600,
  minHeight: "100vh",
  margin: "0 auto",
  boxShadow: "rgba(100,100,100,0.2) 0px 0px 29px 0px",
  padding: "0px 15px",
});

export const Header = styled.header({
  height: 60,
  fontWeight: "bold",
  fontSize: 18,
  lineHeight: "60px",
});

export const HeaderLink = styled(Link)({
  display: "block",
  color: "black",
  textDecoration: "none",
});

export const Main = styled.main({
  paddingTop: 10,
});

export const Footer = styled.footer({
  padding: "100px 0px",
  color: "gray",
});
