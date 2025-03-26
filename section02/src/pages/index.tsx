import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      Home
      <button
        onClick={() => {
          router.push("/about/1");
        }}
      >
        go about
      </button>
    </div>
  );
}
