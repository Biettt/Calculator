import { Link } from 'react-router-dom';

function Nav() {
  return (
   
      <header className="header">
        <nav className="headerMenu">
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/singup" className="tlink">
              Cadastro
            </Link>
            <Link to="/login" className="tlink">
               Login
            </Link>
            <Link to="/calculator" className="tlink">
              Calculadora
            </Link>
            <Link to="/converter" className="tlink">
              Conversor
            </Link>
            <Link to="/about-us" className="tlink">
              Sobre Nós
            </Link>
          </ul>
        </nav>
      </header>
  
  );
}
export default Nav;