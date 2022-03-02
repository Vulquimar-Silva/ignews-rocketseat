import styles from './styles.module.scss';

interface SubscriteButtonProps {
  priceId: string;
}

export function SubscribeButton({priceId}: SubscriteButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
