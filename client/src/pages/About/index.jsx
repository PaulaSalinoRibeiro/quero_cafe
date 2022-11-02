import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import styled from '../../styles/About.module.css';

import BagCoffee from "../../images/bag-of-coffe-beans.jpg";

export function About() {
  return (
    <>
      <Header/>
      <main className={styled.container}>
        <div className={styled.image}>
          <img src={BagCoffee} alt="Bag of Beans Coffe" />
        </div>
        <div className={styled.text}>
          <p>
            <strong>Sobre</strong> <br/>
            A <span>Quero Café</span> consiste de um projeto pessoal desenvolvido 
            com o intuito de consolidar as habilidades em <span>React</span>, <span>GraphQL </span> 
            e <span>Mongo DB</span> que foram as principais tecnologias utilizadas 
            para a construção dessa aplicação<span> FullStack</span>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}