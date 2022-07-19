import PropTypes from 'prop-types';

function Item ({marca, anoLancamento}) {
    return (
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    ) 
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,                 //validação do tipo da propriedade (String) e a propriedade é obrigatoria
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {                                   //Default Props se não hoiuver especificação
    marca: "Not Available",
    anoLancamento: 0,
}

export default Item