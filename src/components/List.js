import Item from "./Item"

export default function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
        <Item marca="Ferrari" lancamento={1985}/>
        <Item marca="Fiat" lancamento={1974}/>
        </ul>
        </>
    )
}