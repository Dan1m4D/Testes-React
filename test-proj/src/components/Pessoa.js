function Pessoa({name, age, profission, foto}){
    return(
        <div>
            <img
            src={foto}
            alt={name}
            />
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Profission: {profission}</h2>
        </div>
    );
};

export default Pessoa;