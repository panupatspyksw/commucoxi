function Mirror({ mode, spacing, children, textbreak, light, className }) {
  var modeclass = `mirror-${mode} ${
    textbreak && 'text-break'
  } position-relative ${light && 'border-light'}`;
  return (
    <div className={`mirror d-block ${modeclass} ${spacing} ${className}`}>
      {children}
    </div>
  );
}

Mirror.defaultProps = {
  mode: 'dark',
  textbreak: true,
  spacing: '',
  light: true,
  className: '',
};
export default Mirror;
