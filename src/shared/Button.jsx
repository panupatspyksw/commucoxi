import { NavLink } from 'react-router-dom';

function Button({ size, link, label, center }) {
  return (
    <NavLink
      className={`coxi-btn ${size} ${center && 'mx-auto'} text-uppercase`}
      to={link}
    >
      <span>{label}</span>
    </NavLink>
  );
}

Button.defaultProps = {
  size: 'big-btn',
  link: '/',
  label: 'BUTTON',
  center: true,
};
export default Button;
