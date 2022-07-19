function OutraLista({items}) {
    return(
        <>
            <h3>Cousas bouas</h3>
            {items.length > 0 ?
                (items.map((item, index) => (
                    <p key= {index}>{item}</p>
                ))
                )
                :
                (<p>Empty List ( T-T)</p>)
            }
        </>
    )
}

export default OutraLista;