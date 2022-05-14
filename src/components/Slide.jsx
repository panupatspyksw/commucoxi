function Slide({ children }) {
  return (
    <div className='h-100 bg-dark overflow-hidden w-100 py-5'>
      <div className='w-100 h-100 position-relative'>{children}</div>
    </div>
  );
}

export default Slide;
