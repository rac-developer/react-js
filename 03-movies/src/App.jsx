import { Link } from 'react-router-dom';
import MyRouts from './routers/routes.jsx'

function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className='text-center mt-6'>
          🎬 Movies 
          </h1>
        </Link>
      </header>
      <MyRouts />
    </div>
  );
}

export default App;