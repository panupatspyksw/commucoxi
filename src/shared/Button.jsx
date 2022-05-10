function Button({ size, link, label }) {
  return (
    <a className={`coxi-btn ${size} mx-auto text-uppercase`} href={link}>
      <span>{label}</span>
    </a>
  );
}

Button.defaultProps = {
  size: 'big-btn',
  link: '/',
  label: 'BUTTON',
};
export default Button;
