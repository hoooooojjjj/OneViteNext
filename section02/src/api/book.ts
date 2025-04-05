import { BookItem } from "@/types";

export const getRandomBooks = async (): Promise<BookItem[]> => {
  try {
    const response = await fetch("http://localhost:12345/book/random");
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getAllBooks = async (): Promise<BookItem[]> => {
  try {
    const response = await fetch("http://localhost:12345/book");
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
