import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/Products";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CoffeCard } from "../../components/CoffeCard";

import styled from "../../styles/Products.module.css";

export function Products() {

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  
  if (loading) return <h1>Carregando...</h1>

  if (error) return <h1>Algo deu Errado</h1>

  return (
    <>
      <Header/>
      <main className={styled.container}>
        <h1 className={styled.title}>
          Nossos cafés
        </h1>
        <div className={styled.cards}>
          {
            data.products.map(product => <CoffeCard product={product} key={product.id} />)
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}