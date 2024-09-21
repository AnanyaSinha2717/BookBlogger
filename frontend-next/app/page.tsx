import Link from "next/link";
import BlogPage from "./blogpage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a>
          <h1 className="text-3xl text-center">Hello, Welcome back!</h1>
        </a>

        <Link href="/blogpage/">
          Write a blog!
        </Link>
      </div>
    </main>
  );
}
