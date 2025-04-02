import { useRouter } from "next/router";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SearchInput {
  searchValue: string;
}

function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInput>();

  const handleSubmitSearch: SubmitHandler<SearchInput> = (
    data: SearchInput
  ) => {
    router.push(`/search?q=${data.searchValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitSearch)}>
        <input
          placeholder="검색어를 입력하세요."
          {...register("searchValue")}
        />
        <input type="submit" value={"검색"} />
        {errors.searchValue && <span>This field is required</span>}
      </form>
      {children}
    </div>
  );
}

export default SearchableLayout;
