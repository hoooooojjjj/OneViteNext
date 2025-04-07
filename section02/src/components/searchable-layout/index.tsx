import { useRouter } from "next/router";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchForm } from "./styles";

interface SearchInput {
  searchValue: string;
}

function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { register, handleSubmit } = useForm<SearchInput>();

  const handleSubmitSearch: SubmitHandler<SearchInput> = (
    data: SearchInput
  ) => {
    router.push(`/search?q=${data.searchValue}`);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit(handleSubmitSearch)}>
        <input
          placeholder="검색어를 입력하세요."
          {...register("searchValue", { required: true })}
        />
        <button>검색</button>
      </SearchForm>
      {children}
    </div>
  );
}

export default SearchableLayout;
