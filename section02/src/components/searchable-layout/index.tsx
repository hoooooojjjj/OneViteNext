import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SearchInput {
  searchValue: string;
}

function SearchableLayout({ children }: { children: ReactNode }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInput>();

  const handleSubmitSearch: SubmitHandler<SearchInput> = (
    data: SearchInput
  ) => {
    reset();
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
