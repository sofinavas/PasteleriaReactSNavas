import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { pedirDatos } from "../../services/pedirDatos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
