import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoSearch } from "./indexStyle";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // router를 통해 navigating할 때 prefetching을 하려면 마운트 시 prefetch 메서드를 이용하면 된다.
    router.prefetch("/search");
  }, []);

  return (
    <div>
      Home
      <GoSearch
        // Link 태그가 아닌 router 객체를 사용한 경우 Next에서 해당 링크를 인식하지 못해, prefetching이 발생하지 않는다.
        onClick={() => {
          router.push("/search");
        }}
      >
        go search
      </GoSearch>
    </div>
  );
}
