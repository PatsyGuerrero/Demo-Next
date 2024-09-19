"use client"
import Layout from "./components/layout"
import Hero from "./components/hero";
import ProductCard from "./components/productCard"
import BannerApp from "./components/bannerApp"
import data from "./data/poliza.json"
import blog from "./data/blogs.json"
import ArticlesLandings from "./components/articlesLanding"

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <div className="container">
        {data?.cards.map((item, value) => {
          return (<ProductCard data={item} key={value}/>)
        })}
        <style jsx>{`
          .container {
            margin: 96px 0;
            display:grid;
            gap:48px;
          }
         
        `}</style>
      </div>
      <ArticlesLandings data={blog}/>
      <BannerApp/>
    </Layout>
  );
}
