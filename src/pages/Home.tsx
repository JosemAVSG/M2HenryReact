import { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";

interface Data {
  title: string;
  year: number;
  director: string;
  duration: string;
  genre: string[];
  rate: number;
  poster: string;
}

function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.1rodemayo.com/movies?quantity=3");
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{data ? <Card data={data}></Card> : <p>Cargando......</p>}</>;
}

export default Home;
