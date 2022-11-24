import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/AllRoutes';

function App() {
  return (
    <div data-theme="dark" className="App max-w-[1398px] px-[25px] lg:px-0 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
