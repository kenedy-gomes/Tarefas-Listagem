import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from '@chakra-ui/react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/usuarios', {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const data = response.data;
        alert(`Usuário cadastrado com sucesso! Token: ${data.token}`);
      } else {
        alert('Erro ao cadastrar o usuário');
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <Input
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
