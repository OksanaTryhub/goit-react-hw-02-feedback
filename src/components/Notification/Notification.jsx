import PropTypes from 'prop-types';
import css from './Notification.module.css';

const DisplayNotification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

export default DisplayNotification;

DisplayNotification.propTypes = {
  message: PropTypes.string.isRequired,
};
