import { Route, Routes } from 'react-router';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import AuthLaout from './laout/AuthLaout';
import Profile from './pages/Profile';
import ProtectedRoute from './componenets/protectedRoute';
import AddGame from './pages/AddGame';
import { useGlobalContext } from './context/globalContext';
import GoogleLogin from './pages/GoogleLogin';

function App() {
  const { userProfile } = useGlobalContext();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/google" element={<GoogleLogin />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/login"
          element={
            <AuthLaout>
              <Login />
            </AuthLaout>
          }
        />
        <Route
          path="/signUp"
          element={
            <AuthLaout>
              <SignUp />
            </AuthLaout>
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <AuthLaout>
              <ForgotPassword />
            </AuthLaout>
          }
        />
        <Route
          path="/ResetPassword"
          element={
            <AuthLaout>
              <ResetPassword />
            </AuthLaout>
          }
        />

        <Route
          path="/addGame"
          element={
            <ProtectedRoute>
              {userProfile?.role === 'ADMIN' ? <AddGame /> : <NotFoundPage />}
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
