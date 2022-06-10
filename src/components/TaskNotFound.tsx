import styles from './TaskNotFound.module.css';
import emptyImg from '../assets/empty.svg';

export function TaskNotFound() {
  return (
    <div className={styles.emptyCard}>
      <img src={emptyImg} alt="Icone imagem vazia" />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}