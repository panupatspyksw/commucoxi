import { NavLink } from 'react-router-dom';

function Button({ size, link, label }) {
  return (
    <NavLink className={`coxi-btn ${size} mx-auto text-uppercase`} to={link}>
      <span>{label}</span>
    </NavLink>
  );
}

Button.defaultProps = {
  size: 'big-btn',
  link: '/',
  label: 'BUTTON',
};
export default Button;
