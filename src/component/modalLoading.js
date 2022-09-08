import styles from './modal.module.scss';

export default function ModalLoading(params) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.loadingView}></div>
    </div>
  );
}
