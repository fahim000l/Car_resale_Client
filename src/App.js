import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/AllRoutes';

function App() {
  return (
    <div data-theme="dracula" className="App lg:max-w-[1398px] lg:px-0 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
