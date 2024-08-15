import styles from './button.module.css';

export default function Button({ className, text }) {
    return (
        <div>
            <button type="submit" className={styles[className]}>
                {text}
            </button>
        </div>
    );
}
