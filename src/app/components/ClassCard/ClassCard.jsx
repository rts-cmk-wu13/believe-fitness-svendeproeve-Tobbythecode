import Link from "next/link";

export default function ClassCard({ class: classData }) {
  return (
    <div className="flex justify-center font-sans my-4">
      <main className="max-w-3xl flex flex-col items-center gap-4">
        <Link href={`/classes/${classData.id}`}>
          <article className="flex flex-col p-5 items-center gap-3">
   <div className="relative w-full sm:w-125 h-125 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={classData.asset.url}
                alt={classData.className}
              />

           
<div className="absolute bottom-0 left-0 w-full bg-[rgba(0,49,71,0.75)] text-white p-4 text-left">
  <h2 className="text-lg font-semibold">{classData.className}</h2>
</div>
            </div>
          
          </article>
        </Link>
      </main>
    </div>
  );
}