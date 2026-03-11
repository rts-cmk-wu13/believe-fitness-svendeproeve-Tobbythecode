

export default function NewsCard({ news} ) {




    return (


        <>   
        <h1 className="text-black text-3xl font-bold py-2">{news.title}</h1>
        <figure>

    <img src={news.asset.url} alt="placeholder" />
</figure>
     
        <p className="text-black text-xl py-5 font-extralight">{news.text}</p>

        </>
    )
}