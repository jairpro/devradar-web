import React from 'react';

import './styles.css';

//function DevItem(props) {
//  const { dev } = props;
// // ou...
function DevItem({ dev }) {
    return ( 
    <li className='dev-item'>
      <header>
        <img src={dev.avatar_url/*"https://avatars0.githubusercontent.com/u/11990151?s=400&v=4"*/} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.github_username}</strong>
          <span>{dev.techs.join(", ")/*javaScript, PHP, Delphi*/}</span>
        </div>
      </header>
      <p>{dev.bio/*Desenvolvedor web, mobile e desktop. Compatível com sistemas corporativos à jogos.*/}</p>
      <a href={`https://github.com/${dev.github_username}`/*jairpro*/}>Acessar perfil no Github</a>
    </li>
  )
}
//<a target="_blank" href={`https://github.com/${dev.github_username}`/*jairpro*/}>Acessar perfil no Github</a>

export default DevItem;