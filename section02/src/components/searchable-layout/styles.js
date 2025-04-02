import styled from "@emotion/styled";

export const SearchForm = styled.form({
  display: "flex",
  gap: 10,
  marginBottom: 20,

  "& > input": {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    border: "1px solid rgb(220,220,220)",
  },

  "& > button": {
    width: 80,
    borderRadius: 5,
    border: "none",
    backgroundColor: "rgb(37,147,255)",
    color: "white",
    cursor: "pointer",
  },
});
