import News from "./components/news/news";
import Hero from "./components/hero/hero";
export default function Home() {

  return (
    <>
   <Hero />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white">
          
   <News />
        </main>
      </div>
    </>
  );
}
