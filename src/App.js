import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout.js';
import Home from './components/pages/Home.js';
import SignIn from './components/pages/SignIn.js';
import PageNotFound from './components/pages/404.js';
import AddTasksPage from './components/pages/AddTasksPage.js';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/signin'  element={<SignIn />} />
         { <Route path='/GroupPage/AddTaskPage' element={<AddTasksPage />} /> }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;