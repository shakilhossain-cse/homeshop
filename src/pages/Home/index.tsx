import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { LoadingProducts } from "../../components/loading";
import { getHomeData } from "../../services/homeService";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Categories from "./Categories";
import Products from "./Products";
import Services from "./Services";

function Home() {
  const { data } = useQuery(["products"], getHomeData);

  return (
    <div>
      <Banner />
      <Services />
      {data?.categories && <Categories categories={data.categories} />}

      {data?.recentProducts && (
        <Products data={data.recentProducts} title="New Arrival" />
      )}
      <Advertisement />
      {data?.randomProducts && (
        <Products data={data.randomProducts} title="Recommended For You" />
      )}
    </div>
  );
}

export default Home;
