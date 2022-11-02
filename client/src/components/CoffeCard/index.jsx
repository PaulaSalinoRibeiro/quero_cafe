import { useNavigate } from "react-router-dom"
import styled from "../../styles/CoffeCard.module.css";

export function CoffeCard({ product }) {

  const navigate = useNavigate();

  return (
    <div className={styled.card}>
      <h2 className={styled.name}>
        {product.name}
      </h2>
      <img 
        src={product.image} 
        alt={product.name} 
        className={styled.image}
      />
      <div className={styled.infos}>
        <p>R$ {product.price.replace(".", ",")}</p>
        <button
          type="button"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver detalhes
        </button>
      </div>
    </div>
  )
}