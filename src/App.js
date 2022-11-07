import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routers } from './Routers/Routers';

function App() {
  const routers = Routers;
  return (
    <div>
      <RouterProvider router={routers}>

      </RouterProvider>
    </div>
  );
}

export default App;
