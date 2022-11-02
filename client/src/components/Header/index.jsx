import { Link } from "react-router-dom";

import styled from "../../styles/Header.module.css";

export function Header() {
  return (
    <nav className={styled.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/products">Produtos</Link>
        </li>
    </ul>
    </nav>
  )
}