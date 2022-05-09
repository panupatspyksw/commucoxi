import Transitions from '../components/TransitionPage';

const Home = () => {
  return (
    <>
      <Transitions>
        <h3 className='mt-5' style={{ color: 'green' }}>
          Welcome to GeeksforGeeks
        </h3>
      </Transitions>
    </>
  );
};

export default Home;
