import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.feedbackForm__title}>{title}</h1>

    {children}
  </section>
);

export default Section;
