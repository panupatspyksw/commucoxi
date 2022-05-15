function Slide({ children }) {
  return (
    <div
      className='h-100 overflow-hidden w-100 py-5'
      style={{ background: 'black' }}
    >
      <div className='w-100 h-100 position-relative'>{children}</div>
    </div>
  );
}

export default Slide;
