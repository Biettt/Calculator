import React from "react";
import '../styles/AboutUs.css';
import '../styles/Nav.css';

function AboutUs() {
    return(
        <div className="page-content about-us">
            <h2>Sobre Nós</h2>
            <p>Bem-vindo à página "Sobre Nós" do projeto Challenge Sprints, desenvolvido pela equipe da Universidade FIAP 
                no curso de Engenharia de Software. Nossa jornada de desenvolvimento deste projeto foi marcada por quatro emocionantes
                sprints, culminando nesta versão final.</p>
            
            <h2>Quem Somos</h2>
            <p>Somos uma equipe de estudantes dedicados e apaixonados por tecnologia, composta por entusiastas da Engenharia de Software. 
                Nosso objetivo foi criar uma plataforma que integra diversas funcionalidades em um único site, proporcionando uma 
                experiência enriquecedora para nossos usuários.</p>
            
            <h2>O Projeto</h2>
            <p>Nosso projeto desafiou nossa capacidade de aprendizado e inovação. Inicialmente, nosso foco era desenvolver uma calculadora
                avançada, mas decidimos ir além. Integramos um conversor de moedas com uma API externa, tornando a experiência mais
                prática e informativa. Nossa plataforma foi construída em React, com JavaScript como linguagem de programação principal,
                HTML para marcação e SCSS para estilização.</p>

            <h2>Desenvolvimento</h2>
            <p>Desenvolvemos este projeto em quatro sprints, cada um representando uma etapa de evolução. 
                Começamos com uma visão inicial, aprendendo os conceitos básicos e construindo a base do site. 
                A cada sprint, refinamos nossa plataforma, adicionando recursos, melhorando a usabilidade e corrigindo bugs.</p>

            <h2>Nossa Missão</h2>
            <p>Nosso objetivo é proporcionar uma plataforma útil e informativa para nossos usuários, tornando tarefas diárias como cálculos
                matemáticos e conversões de moeda mais simples. Além disso, estamos comprometidos em continuar aprimorando e expandindo
                nossos recursos no futuro. <br/><br/>
                Agradecemos por nos acompanhar nesta jornada de desenvolvimento e esperamos que você aproveite ao máximo nosso projeto
                da Challenge Sprints. <br/><br/>
                Obrigado por fazer parte desta experiência conosco!</p>
            
        </div>
    );
}

export default AboutUs;