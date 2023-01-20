import css from './Notification.module.css';

const DisplayNotification = () => {
  const message = 'There is no feedback';

  return <p className={css.notification}>{message}</p>;
};

export default DisplayNotification;
