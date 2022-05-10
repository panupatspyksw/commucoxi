function ExclusiveSVG({ SVG, title }) {
  return (
    <div className='d-flex flex-column gap-3 '>
      <div className='w-100 mt-5'>
        <SVG />
      </div>
      <div className='sub-title fw-bold text-uppercase mt-3 '>
        {title && `${title}`}
      </div>
    </div>
  );
}

ExclusiveSVG.defaultProps = {
  title: false,
};

export default ExclusiveSVG;
