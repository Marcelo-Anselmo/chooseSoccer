import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://choose-soccer-backend.vercel.app/"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro:");
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {/* <h2>Clique no botão para abrir o modal</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.partidas}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )} */}
    </>
  );
};

export default FetchData;
