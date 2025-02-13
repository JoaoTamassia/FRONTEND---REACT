import { useState } from 'react';
import gitlogo from '../assets/githubpicture.png';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';
function App() {

  const [repos, setRepos] = useState([]); 
  const [currentRepo, setCurrentRepo] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
  
      if (data && data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
  
        if (isExist) {
          alert('Repositório já adicionado');
          return;
        }
  
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado');
      } else {
        alert('Erro ao procurar o repositório');
      }
    }
  };
  

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/> )}
    </Container>
  );
}

export default App;
