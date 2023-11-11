import React, { useState } from "react";
import '../styles/Singup.css';
import Footer from './Footer';
import '../styles/Nav.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSignup = () => {
    if (username && password) {
    //Simulação de cadastro de usuário
      setRegistered(true);
      alert("Cadastro realizado com sucesso!");
    } 
    else {
      alert("Por favor, preencha usuário e senha.");
    }
  };

  return (
    <div>
      {registered ? (
        <div>
          <h2>Você se cadastrou com sucesso!</h2>
          <p>Usuário: {username}</p>
        </div>
      ) : (
        <div>
          <h2>Cadastro</h2>

          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignup}>Cadastrar</button>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Signup;