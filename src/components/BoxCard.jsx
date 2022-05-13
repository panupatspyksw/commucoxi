function BoxCard({ data }) {
  var { image, message, name, nn, bgposition } = data;

  return (
    <div className='boxcard col-md-6 col-lg-4 col-xl-3 mb-5'>
      <div className='mb-3'>
        <div className='pb-100p overflow-hidden position-relative'>
          <div
            className='img pb-100p w-100 position-absolute top-0 left-0'
            style={{
              background: `url(/STDimages/${image})`,
              backgroundPosition: `${bgposition}`,
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div className='sub-title fw-bold mt-4 '>{nn}</div>
        <div className='content mt-1'>{name}</div>
        <div className='text-break th-text fw-light mt-1'>{message}</div>
      </div>
    </div>
  );
}

BoxCard.defaultProps = {
  bgposition: 'center center',
};

export default BoxCard;
