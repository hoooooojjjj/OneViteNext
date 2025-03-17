import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      Home
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        go about
      </button>
    </div>
  );
}
