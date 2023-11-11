import React from 'react';
import '../styles/Footer.css';
import '../styles/Nav.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contato</h3>
                    <p>Telefone: (11) 7070-4242 | Endereço: Avenida Paulista, 777</p>
                </div>
                <div className="social-media">
                    <h3>Redes Sociais</h3>
                    <p>
                        LinkedIn: <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>Atticus</a> | 
                        Instagram: <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'>@Atticus</a> | 
                        Whatsapp: <a href='https://whatsapp.com/' target='_blank' rel='noopener noreferrer'> (11) 9 6060-1717</a> 
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;