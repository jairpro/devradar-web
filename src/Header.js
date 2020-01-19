import React from 'react';
import './Header.css';

function Header(props) {
  //return (<h1 class="cab">Cabeçalho</h1>);
  return (<h1 className="cab">{props.title}</h1>);
}

export default Header;