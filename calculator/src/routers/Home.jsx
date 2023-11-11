import React from 'react';
import '../styles/Home.css';

function Home() {
    return(
        <div className="home">
            <h2>Bem-Vindo à Atticus</h2>
            <p>Atticus é o lar do projeto "Challenge Sprints", uma proposta da faculdade onde os alunos têm a oportunidade de criar projetos incríveis. Meu projeto foi focado em desenvolver um sistema de calculadora em React, mas com um toque especial.</p>
            <p>Decidi expandir o projeto incluindo um conversor de moedas que se conecta a uma API externa para fornecer taxas de câmbio em tempo real de várias moedas ao redor do mundo. Isso adicionou um toque de sofisticação e mais utilidade ao meu trabalho.</p>
            <p>Utilizando JavaScript, HTML, troquei o código CSS por SCSS para a estilização, criei uma experiência de usuário amigável e funcional. Convido você a explorar meu projeto e descobrir como a matemática e as finanças podem se unir de maneira harmoniosa em um ambiente digital.</p>
        </div>
    );
}

export default Home;