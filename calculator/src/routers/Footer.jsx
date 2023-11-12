import React from 'react';
import '../styles/Footer.css';
import '../styles/Nav.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contato</h3>
                    <p>Telefone | (11) 7070-4242 <br/> Endereço | Avenida Paulista, 777</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;