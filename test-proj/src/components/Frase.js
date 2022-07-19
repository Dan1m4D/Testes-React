import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseConteudo}>Este componente tem uma frase!</p>
        </div>
    );
};

export default Frase;