import React, { useState } from 'react';
import './register.css';
import { Button } from '@chakra-ui/react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      alert(`Usuário cadastrado com sucesso! Token: ${data.token}`);
    } else {
      alert('Erro ao cadastrar o usuário');
    }
  };

  return (
    <div className='container'>
      <h1>Cadastro de Usuários</h1>
      <form className='form'>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" onClick={handleSubmit}>Cadastrar</Button>
      </form>
    </div>
  );
}

export default App;
