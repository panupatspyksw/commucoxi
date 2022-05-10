function ExclusiveSVG({ SVG, title, className }) {
  return (
    <div className={`d-flex  w-100 flex-column gap-3 ${className}`}>
      <div className='w-100 mt-5'>
        <SVG />
      </div>
      <div className='sub-title fw-bold text-uppercase mt-3 text-center mx-auto w-100 border-white '>
        {title && `${title}`}
      </div>
    </div>
  );
}

ExclusiveSVG.defaultProps = {
  title: false,
};

export default ExclusiveSVG;
