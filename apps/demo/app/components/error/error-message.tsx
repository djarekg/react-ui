import styles from './error-message.module.css';

type ErrorMessageProps = {
  message: string;
};

/**
 * ErrorMessage component.
 *
 * @param {string} message - The error message to display
 * @returns {JSX.Element}
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
