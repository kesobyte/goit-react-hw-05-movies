import css from './Footer.module.css';

export const Footer = () => {
  return (
    <p className={css.footerText}>
      &copy; {new Date().getFullYear()} Developed by: Kim Alvarez
    </p>
  );
};
