import React, { useState } from "react";
import '../styles/Login.css';
import Footer from './Footer';
import '../styles/Nav.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await checkCredentials(email, password);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkCredentials = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulação de verificação com atraso de 2 segundos
      setTimeout(() => {
        if (email === "usuario@gmail.com" && password === "senha") {
          resolve({ success: true });
        } else {
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
          <p>Seja Bem-vindo, {email}!</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
            </span>
          </div>

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