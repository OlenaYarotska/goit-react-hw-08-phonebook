import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import  PrivateRoute  from 'Components/PrivateRoute';
import PublicRoute  from 'Components/PublicRoute';
import AppBar from 'Components/AppBar/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { ContainerApp } from 'Components/Container/Container';
import { Spinner } from './Components/Spinner/Spinner';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));


const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  
  return (
      !isFetchingCurrentUser && (
        <ContainerApp>          
           <AppBar />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route exact path='/' element={<PublicRoute> <HomePage /> </PublicRoute>} />
              <Route path='register' element={<PublicRoute restricted redirectTo="/login"> <RegisterPage /> </PublicRoute>} />
              <Route path='login' element={<PublicRoute restricted redirectTo="/contacts"><LoginPage /> </PublicRoute>} />
                <Route path='/contacts' element={<PrivateRoute restricted redirectTo="/login"><ContactsPage /> </PrivateRoute>} />
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          </Suspense> 
            <Toaster />
          </ContainerApp>
      )
    )
};

export default App;


