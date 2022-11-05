import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../queries/Products";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";

import styled from "../../styles/DetailsProduct.module.css";

export function DetailsProduct() {

  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } })

  if (loading) return <h1>Carregando...</h1>

  if (error) return <h1>Algo deu errado</h1>

  return (
    <>
      <Header/>
      <main className={styled.main}>
        <ProductDetailsCard product={data.product} />
      </main>
      <Footer/>
    </>
  )
}