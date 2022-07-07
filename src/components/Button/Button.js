import styles from './Button.module.css';

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.alert}>Voir</button>
    )
}

export default Button;