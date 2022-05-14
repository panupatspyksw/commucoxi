import MountainSVG from '../media/Mountain.svg';
function Mountain({ className = '', flipx }) {
  return (
    <div className={`d-block pe-none ${className}`}>
      <img
        className={`img-fluid ${flipx && 'flipx'}`}
        src={MountainSVG}
        alt=''
      />
    </div>
  );
}

Mountain.defaultProps = {
  flipx: false,
};

export default Mountain;
