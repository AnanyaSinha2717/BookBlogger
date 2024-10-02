import Link from "next/link";
import { Fredoka } from 'next/font/google'
 
const fredoka = Fredoka({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

  
        <a className={fredoka.className}>
          <h1 className="text-3xl text-center">Hello, Welcome back!</h1>
        </a>

        <Link href="/blogpage/">
          <button className="btn btn-secondary w-55 rounded-full">Write a blog!</button>
        </Link>
      </div>
    </main>
  );
}
