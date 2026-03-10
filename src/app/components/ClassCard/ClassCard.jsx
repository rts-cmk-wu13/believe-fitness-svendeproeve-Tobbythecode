import Link from "next/link";

export default function ClassCard({ class: classData }) {
  return (
    <div className="flex justify-center font-sans my-4">
      <main className="max-w-3xl flex flex-col items-center gap-4">
        <Link href={`/classes/${classData.id}`}>
          <article className="flex flex-col items-center gap-3">
   <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full  h-full object-cover"
                src={classData.asset.url}
                alt={classData.className}
              />

           
<div className="absolute bottom-0 pt-5 left-0 w-1/2 rounded-tr-full  bg-[rgb(241,196,14)] text-white p-4 text-left">
  <h2 className="text-lg text-black font-bold">{classData.className}</h2>
</div>
            </div>
          
          </article>
        </Link>
      </main>
    </div>
  );
}