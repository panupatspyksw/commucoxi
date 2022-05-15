function Slide({ children, spacey }) {
  return (
    <div
      className={`h-100 overflow-hidden w-100 ${spacey && 'py-5 py-lg-0'}`}
      style={{ background: 'black' }}
    >
      <div className='w-100 h-100 position-relative'>{children}</div>
    </div>
  );
}

Slide.defaultProps = {
  spacey: false,
};

export default Slide;
