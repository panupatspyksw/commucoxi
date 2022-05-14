import Mirror from '../shared/Mirror';
import Button from '../shared/Button';
function ProjectCard({ post }) {
  var { title, type, paragraph, link, poster } = post;
  return (
    <div className='my-3 d-block my-md-4 my-lg-5 py-3 ppost h-fitcontnet'>
      <Mirror mode={'black'} className={'px-md-4'}>
        <div className='d-flex flex-column flex-lg-row px-xl-5 ppost-row'>
          <div className='col-12 col-lg-6 py-5 px-4 p-md-5 p-lg-5 p-xl-5  '>
            <div className='w-100 overflow-hidden'>
              <div
                className='position-relative w-100 rounded-3 overflow-hidden'
                style={{ paddingBottom: '143%' }}
              >
                <img
                  src={`/Posterimages/${poster}`}
                  className='position-absolute w-100 top-0 start-0  img'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 d-flex flex-column justify-content-center gap-4 ppost-text py-5 px-4 pt-0 p-md-5 pt-md-0 p-lg-5 p-xl-5 text-start info'>
            <div className='d-flex flex-column gap-2'>
              <div className='post-title text-uppercase'>{title}</div>
              <div className='post-sub-title text-uppercase'>{type}</div>
            </div>
            <div className='post-content text-break word-break th-text'>
              {paragraph}
            </div>
            <div className='d-flex ppost-btn '>
              <Button
                link={link}
                center={false}
                size={'small-btn'}
                label={'SEE MORE'}
              />
            </div>
          </div>
        </div>
      </Mirror>
    </div>
  );
}

ProjectCard.defaultProps = {
  link: '/',
  title: 'TIME AR EXPERIENCE',
  type: 'Application',
  paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `,
  poster: '/Posterimages/TEST.jpg',
  light: true,
  className: '',
};
export default ProjectCard;
