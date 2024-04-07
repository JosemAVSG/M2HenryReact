import React from 'react'

interface Data {
    title: string;
    year: number;
    director: string;
    duration: string;
    genre: string[];
    rate: number;
    poster: string;
  }
  
  interface CardProps {
    data: Data[]; // Definimos que el componente Card acepta un array de objetos Data como prop 'data'
  }


const Card: React.FC<CardProps> = ({ data }) => {
    
  return (
    <div>
    <h1>Datos de la api</h1>
    <div className="card_container">
      {data.map((item: Data, index: number) => (
      <div key={index} className="card_item">
        <a href={item.poster} target="_blank">
          <img src={item.poster} alt={item.title} />
          <h3>{item.title}</h3>
        </a>
        <p>Year: {item.year}</p>
        <p>Director: {item.director}</p>
        <p>Duration: {item.duration}</p>
        <p>Genre: {item.genre.join(", ")}</p>
        <p>Rating: {item.rate}</p>
      </div>
    ))}
    </div>
    
  </div>
  )
}

export default Card;