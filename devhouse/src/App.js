import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Rooms from './pages/Rooms';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoutes';
import Notification from './pages/Notification';
import Events from './pages/Events';
import Bookmark from './pages/Bookmark';
import Explore from './pages/Explore';
import Users from './pages/Users';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NhostReactProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="/" element={<Navigate to="events" />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>}>
              <Route path="rooms" element={<Rooms />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notification" element={<Notification />} />
              <Route path="events" element={<Events />} />
              <Route path="explore" element={<Explore />} />
              <Route path="bookmark" element={<Bookmark />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </NhostReactProvider>
    </ThemeProvider>
  );
}

export default App;
