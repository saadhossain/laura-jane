import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routers } from './Routers/Routers';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const routers = Routers;
  return (
    <div>
      <RouterProvider router={routers}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
