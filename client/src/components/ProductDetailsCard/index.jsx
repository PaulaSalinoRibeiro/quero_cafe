import { CiCoffeeBean } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";
import { RiPriceTag3Line } from "react-icons/ri";
import { GiCoffeePot } from "react-icons/gi";


import styled from "../../styles/ProductDetailsCard.module.css";

export function ProductDetailsCard({product}) {
  return (
    <div className={styled.container}>
      <div className={styled.image}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styled.infos}>
        <h2 className={styled.title}>
          {product.name}
        </h2>
        <p className={styled.description}>
          {product.description}
        </p>
        <div className={styled.caracters}>
          <p>
            < GiCoffeePot />
            {" "}
            {product.type}
          </p>
          <p>
            <FiCoffee />
            {" "}
            {product.flavor}
          </p>
          <p>
            <CiCoffeeBean />
            {" "}
            {product.grind}
          </p>
        </div>
        <p className={styled.price}>
          <RiPriceTag3Line />
          {" "}
          R$ {product.price}
        </p>
      </div>
    </div>
  )
} 