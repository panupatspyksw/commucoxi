function Mirror({ mode, spacing, children, textbreak }) {
  var modeclass = `mirror-${mode} ${
    textbreak && 'text-break'
  } position-relative border-light`;
  return (
    <div className={`mirror ${modeclass} ${spacing} `}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      {children}
    </div>
  );
}

Mirror.defaultProps = {
  mode: 'dark',
  textbreak: true,
};
export default Mirror;
