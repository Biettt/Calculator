import React, { useState } from "react";
import '../styles/Login.css';
import Footer from './Footer';
import '../styles/Nav.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await checkCredentials(username, password);

      if (response.success) {
        setLoggedIn(true);
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao verificar credenciais:", error);
    }

    setLoading(false);
  };

  const checkCredentials = (username, password) => {
    return new Promise((resolve, reject) => {
    //verificação de credenciais com atraso de 2 segundos
      setTimeout(() => {
        if (username === "usuario" && password === "senha") {
          resolve({ success: true });
        } 
        else {
          resolve({ success: false });
        }
      }, 2000);
    });
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Você está logado!</h2>
          <p>Seja Bem-vindo, {username}!</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>

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

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Entrando..." : "Login"}
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Login;