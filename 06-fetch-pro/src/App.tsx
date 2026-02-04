
import { Suspense } from 'react';
import { fetchData } from './fetchData';
import './App.css'

interface User {
  name: string;
  id: number;
}

const apiData = fetchData('https://jsonplaceholder.typicode.com/users')

function App() {
  const data = apiData.read();

  return (
    <div className="App">
      <h1>Fetch Like a Pro</h1>
      <Suspense fallback={
        <div>Loading...</div>
      }/>
      <ul className="card">
        {data?.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
