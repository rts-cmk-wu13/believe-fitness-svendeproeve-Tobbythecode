
import {getNews} from "@/lib/dal";
import NewsCard from "../newscard/NewsCard";


export default async function News(){
const news = await getNews()





return(


    <>
    <section>

        <h1 className="text-[rgb(241,196,14)] text-7xl font-bold pb-4" >News</h1>
        {news.map(news =>(


<NewsCard news={news} key={news.id} />
        ))}
    </section>
    
    </>
)
}