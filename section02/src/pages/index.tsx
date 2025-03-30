import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/search");
  }, []);

  return (
    <div>
      Home
      <button
        onClick={() => {
          router.push("/search");
        }}
      >
        go search
      </button>
    </div>
  );
}
