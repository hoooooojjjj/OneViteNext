import { ReactNode } from "react";

function SearchableLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>임시 서치 바</div>
      {children}
    </div>
  );
}

export default SearchableLayout;
