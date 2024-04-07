import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [dataform, setDataForm] = useState({});

  const onSubmit = (formaData) => {

    formaData.year = parseInt(formaData.year);
    formaData.rate = parseFloat(formaData.rate);
    formaData.genre = formaData.genre.split(',').map(genre => genre.trim());
    setDataForm(formaData);
    reset();
  };

  console.log(dataform);
  
  useEffect(() => {
    const fetching = async () => {
    
      try {
        const res = await fetch("http://localhost:3000/moviesDb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataform),
        });
        if (res.ok) {
          console.log("Datos Enviados Correctamente");
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    };
    fetching();
    
  }, [dataform]);

  return (
    <div>
      <h1>Agregar Pelicula</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        <br></br>
        {errors.title && <span>Title is Required</span>}
        <label htmlFor="year">Year:</label>
        <br />
        <input
          type="number"
          id="year"
          {...register("year", { required: true })}
        />
        <br />
        {errors.year && <span>Year is required</span>}

        <label htmlFor="director">Director:</label>
        <br />
        <input
          type="text"
          id="director"
          {...register("director", { required: true })}
        />
        <br />
        {errors.director && <span>Director is required</span>}

        <label htmlFor="duration">Duration:</label>
        <br />
        <input
          type="text"
          id="duration"
          {...register("duration", { required: true })}
        />
        <br />
        {errors.duration && <span>Duration is required</span>}

        <label htmlFor="genre">Genre:</label>
        <br />
        <input
          type="text"
          id="genre"
          {...register("genre", { required: true })}
        />
        <br />
        {errors.genre && <span>Genre is required</span>}

        <label htmlFor="rate">Rate:</label>
        <br />
        <input
          type="number"
          id="rate"
          {...register("rate", { required: true, min: 0, max: 10 })}
          step="0.1"
        />
        <br />
        {errors.rate && (
          <span>Rate is required and must be between 0 and 10</span>
        )}

        <label htmlFor="poster">Poster URL:</label>
        <br />
        <input
          type="url"
          id="poster"
          {...register("poster", { required: true })}
        />
        <br />
        {errors.poster && <span>Poster URL is required</span>}
        <button type="submit" value="Submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
