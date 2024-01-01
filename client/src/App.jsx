import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import TaskPage from './pages/TaskPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoutes from './ProtectedRoutes';
import { TasksProvider } from './context/TasksContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className='container mx-auto px-5'>
            <Navbar />
            <Routes>

              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoutes />}>
                <Route path='/task' element={<TaskPage />} />
                <Route path='/add-task' element={<TaskFormPage />} />
                <Route path='/task/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;