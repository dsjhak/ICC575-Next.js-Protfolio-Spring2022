import styles from './main.module.scss'

const Main = ({children}) => {
    return <mian className={styles.main}>{children}</mian>
}
export default Main