import { useEffect, useState } from "react";
import "./App.css";

interface Data {
  title: string; 
}


function App() {
  const [data, setData] = useState<Data[]>([ {title:''}]);

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
 
     
  return (
    <>
      {data ? (
        <div>
          <h1>Datos de la api</h1>
          {data.map((item: Data, index: number) => (
            <h2 key={index}>{item.title}</h2>
          ))}
         
        </div>
      ) : (
        <p>Cargando......</p>
      )}
    </>
  );
}

export default App;
