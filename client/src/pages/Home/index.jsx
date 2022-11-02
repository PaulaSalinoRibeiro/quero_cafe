import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import styled from '../../styles/Home.module.css';

export function Home() {
  return (
    <>  
      <Header />
      <div className={styled.container}>
        <h1 className={styled.title}>
          Começe seu dia com <span>Café</span>
        </h1>
      </div>
      <Footer />
    </>
  )
}