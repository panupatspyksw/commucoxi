function Slide({ children }) {
  return (
    <div className='h-100 bg-dark overflow-hidden w-100'>
      <div className='p-5 w-100 h-100'></div>
      {children}
    </div>
  );
}

export default Slide;
