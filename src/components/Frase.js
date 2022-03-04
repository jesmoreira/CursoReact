import styles from './Frase.module.css'

export default function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Eu amo a Lua</p>
        </div>
    )
}