

import Image from "next/image";

export default function NewsCard({ news} ) {




    return (


        <>   
        <h1 className="text-black text-3xl font-bold py-2">{news.title}</h1>
        <figure>

    <Image src={news.asset.url} alt="placeholder" width={800} height={400} />
</figure>
     
        <p className="text-black text-xl py-5 font-extralight">{news.text}</p>

        </>
    )
}