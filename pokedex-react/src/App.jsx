import { useState } from 'react';

// Importando nossos componentes
import Header from './components/Header';
import Footer from './components/Footer';
import FormularioPokemon from './components/FormularioPokemon';
import ListaPokemon from './components/ListaPokemon';

export default function App() {
  // A lista oficial de pokemons fica no PAI (App.jsx)
  const [listaDePokemons, setListaDePokemons] = useState([]);

  return (
    // Esse estilo inline arruma a tela inteira para o Footer ficar lá embaixo
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      
      <Header />

      {/* flex: 1 faz o conteúdo do meio empurrar o Footer para o final da tela */}
      <main style={{ flex: 1 }}>
        
        {/* Passamos o estado e a função de atualizar para o formulário */}
        <FormularioPokemon 
          listaAtual={listaDePokemons} 
          atualizarLista={setListaDePokemons} 
        />

        {/* Passamos a lista para o componente que vai apenas mostrar os dados */}
        <ListaPokemon pokemons={listaDePokemons} />
        
      </main>

      <Footer />
    </div>
  );
}