import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contato</h3>
                    <p>Telefone: (11) 2222-4444</p>
                    <p>Endereço: Fiap - Avenida Paulista, São Paulo, SP</p>
                </div>
                <div className="social-media">
                    <h3>Redes Sociais</h3>
                    <p>LinkedIn: <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>Perfil aqui</a> </p>
                    <p>Instagram: <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'>Perfil aqui</a> </p>
                    <p>Whatsapp: <a href='https://whatsapp.com/' target='_blank' rel='noopener noreferrer'>numero aqui</a> </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;