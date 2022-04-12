import { Routes, Route } from 'react-router-dom';
import {
  LandingPage,
  LoginPage,
  Four0Four,
  MyQuotesPage,
  UserRegPage,
  ValidateEmailPage,
  RecoveryAccountPage,
} from '../components/pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<UserRegPage />} />
      <Route path='/myquotes' element={<MyQuotesPage />} />
      <Route path='/validate' element={<ValidateEmailPage/>}/>
      <Route path='/recovery' element={<RecoveryAccountPage/>}/>
      <Route path='*' element={<Four0Four />} />
    </Routes>
  );
};

export default AppRouter;
