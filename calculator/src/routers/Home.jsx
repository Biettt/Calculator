import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return(
        <div className="home">
            {/* IREI CRIAR O CONTEÚDO DA PAG HOME */}

            {/* IREI ADD O COMPONENTE FOOTER NA PAG HOME */}
            <footer className='footer'>
                <p>Atticus</p>
                <div>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <svg viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8v-1h3v1zm2.5-4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2-6h-2c-1.1 0-2 .9-2 2v2h1.5V9.21H15V11h-1v3h2c1.1 0 2-.9 2-2v-3a2 2 0 00-2-2z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;