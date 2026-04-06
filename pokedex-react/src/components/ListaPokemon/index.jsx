import './style.css'

// Recebe a lista pronta do App.jsx para desenhar na tela
export default function ListaPokemon({ pokemons }) {
    return (
        <div className="area-lista">
            <h2>Pokémon Capturados</h2>
            
            {/* Se a lista estiver vazia, mostra um aviso */}
            {pokemons.length === 0 ? (
                <p className="aviso-vazio">Nenhum Pokémon registrado ainda. Comece sua jornada!</p>
            ) : (
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>
                            <span className="nome-pokemon">{pokemon.nome}</span> 
                            <span className="tipo-pokemon">{pokemon.tipo}</span>
                        </li>   
                    ))}
                </ul>
            )}
        </div>
    )
}