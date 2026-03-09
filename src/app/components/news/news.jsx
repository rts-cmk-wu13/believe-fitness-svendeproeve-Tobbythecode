"use client"
import {getNews} from "@/lib/dal";
import NewsCard from "../newscard/NewsCard";
import { useRouter } from "next/navigation";

export default async function News(){
const news = await getNews()





return(


    <>
    <section>
        {news.map(news =>(


<NewsCard news={news} key={news.id} />
        ))}
    </section>
    
    </>
)
}