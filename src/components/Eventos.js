import Button from './Button.js'

export default function Eventos() {
    
    function meuEvento() {
        console.log('Ativando primeiro evento')
    }
    
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
        </div>
    )
}