import Button from './eventos/Button';

function Evento({num}) {
    function PrimeiroEvento(){
        console.log('1st event trigged')
    }

    const SegundoEvento = () => {console.log('2nd event trigged')};

    return(
        <div>
            <p>Trigger an event!</p>
            <Button
                text = "1st event"
                event = {PrimeiroEvento}
            />
            <Button
                text = "2nd event"
                event = {SegundoEvento}
            />
        </div>
    )
}

export default Evento