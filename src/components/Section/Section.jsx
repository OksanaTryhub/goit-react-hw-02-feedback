import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.feedbackForm__title}>{title}</h1>

    {children}
  </section>
);

export default Section;

Section.proppTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
