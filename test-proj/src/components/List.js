import Item from './Item'

function List() {
    return(
        <>
            <h3>Lista</h3>
            <ul>
                <Item marca = "Fiat" anoLancamento={1999}/>
                <Item marca = "Mini" anoLancamento={2018}/>
                <Item marca = "Kia" anoLancamento={2020}/>
                <Item marca = "Renault" anoLancamento={2019}/>
                <Item />
            </ul>
        </>
    )
}

export default List