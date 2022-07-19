function Greeting ({name}) {
    const greet = (sumName) => {
        return `Welcome ${name}!`;
    };

    return (name && (<h3>{(greet(name))}</h3>));
}

export default Greeting