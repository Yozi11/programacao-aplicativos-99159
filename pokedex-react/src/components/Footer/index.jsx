import './style.css'

export default function Footer(params) {
    return (
        <footer className='footer-pokedex'>
            <p>&copy; {new Date().getFullYear} - Sistema de captura pokemon</p>
        </footer>
    )
    
}