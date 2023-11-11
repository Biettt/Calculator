import React from 'react';
import '../styles/Home.css';
import Footer from './Footer';

function Home() {
    return(
        <div className="home">
            <h2>Bem-Vindo à Atticus</h2>
            <p>Atticus é o lar do projeto "Challenge Sprints", uma proposta da faculdade onde os alunos têm a oportunidade de criar projetos incríveis. Meu projeto foi focado em desenvolver um sistema de calculadora em React, mas com um toque especial.</p>
            <p>Decidi expandir o projeto incluindo um conversor de moedas que se conecta a uma API externa para fornecer taxas de câmbio em tempo real de várias moedas ao redor do mundo. Isso adicionou um toque de sofisticação e mais utilidade ao meu trabalho.</p>
            <p>Utilizando JavaScript, HTML, troquei o código CSS por SCSS para a estilização, criei uma experiência de usuário amigável e funcional. Convido você a explorar meu projeto e descobrir como a matemática e as finanças podem se unir de maneira harmoniosa em um ambiente digital.</p>

            <p>Desenvolver o projeto da Challenge Sprints tem sido uma jornada incrível e desafiadora ao longo do meu curso de Engenharia de Software na Universidade FIAP. Este projeto, dividido em quatro sprints, representou a culminação do primeiro ano de estudo e aprendizado, onde pudemos aplicar nossos conhecimentos em um ambiente prático e real.
                <br/>Logo no início, o projeto parecia um quebra-cabeça gigante com muitas peças a serem encaixadas. Aprendemos ferramentas como JavaScript, Python, Html, Css, Sass/Scss, C# e React. Cada uma dessas tecnologias era como uma peça vital para o nosso quebra-cabeça, e nosso desafio era integrá-las de maneira eficiente.
                <br/>Ao longo das quatro sprints, nosso grupo se deparou com uma série de desafios únicos. No início, as coisas eram mais simples, construindo a base do nosso site somente com Javascript, HTML e CSS, conforme os meses foram passando aprendemos a estrutura do React. À medida que avançávamos, começamos a trabalhar em funcionalidades mais complexas. Apartir disto, desenvolvemos nosso sistema de calculadora dentro de um site criado por nós mesmos. 
                <br/>No entanto, não estávamos satisfeitos com o básico. Queríamos tornar nosso projeto mais interessante e prático. Foi aí que decidimos adicionar um conversor de moedas, o que nos forçou a mergulhar ainda mais fundo no mundo da programação. A integração de uma API externa para obter as taxas de câmbio foi um desafio que nos obrigou a aprender sobre requisições HTTP, manipulação de dados JSON e exibição de informações de maneira clara e amigável.
                <br/>Ao longo dessas quatro sprints, enfrentamos inúmeras horas de codificação, depuração e testes. Aprendemos a importância de trabalhar em equipe e de manter uma comunicação clara. À medida que nossos conhecimentos se aprofundavam, também aprimorávamos nossas habilidades de resolução de problemas.
                <br/>A última iteração deste projeto é um testemunho do nosso trabalho árduo e dedicação. É um site funcional que combina uma calculadora versátil com um conversor de moedas em tempo real, fornecendo aos usuários uma experiência prática e informativa.
                <br/>Esta experiência nos preparou para desafios futuros na Engenharia de Software e nos deu uma compreensão mais profunda das complexidades e potencialidades da programação. Estamos orgulhosos do que conquistamos e ansiosos para aplicar essas habilidades em projetos futuros. A Universidade FIAP desempenhou um papel fundamental na nossa jornada, fornecendo-nos as ferramentas e o ambiente para crescer como desenvolvedores.</p>
        
            <Footer/>
        </div>
    );
}

export default Home;