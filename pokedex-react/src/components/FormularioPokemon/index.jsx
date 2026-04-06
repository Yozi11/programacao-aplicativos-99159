import { useState } from 'react'
import './style.css'

// Recebe a lista atual e a função de atualizar do App.jsx
export default function FormularioPokemon({ listaAtual, atualizarLista }) {
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')

    const handlerAdicionarPokemon = (event) => {
        event.preventDefault()
        
        if (nome && tipo) {
            // Adiciona o novo pokemon na lista que veio do App.jsx
            atualizarLista([...listaAtual, { nome, tipo }])
            setNome('')
            setTipo('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Registrar Pokémon</h2>
            <form onSubmit={handlerAdicionarPokemon}>
                <input
                    type="text"
                    placeholder='Nome do Pokémon (ex: Pikachu)'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Tipo (ex: Elétrico)'
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>
        </div>        
    )
}
