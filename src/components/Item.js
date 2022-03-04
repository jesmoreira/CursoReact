import PropTypes from "prop-types"

export default function Item(marca, lancamento) {
    return(
        <>
        <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.propTypes ={
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

Item.defaultProps ={
    marca: 'faltou a marca',
    lancamento: 0,
}