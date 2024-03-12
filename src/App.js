
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminGetInPage from './components/AdminGetInPage';
import StudentGetInPage from './components/StudentGetInPage';
import InitialPage from './components/InitialPage';
import AdminSignUp from './components/AdminSignUp';
import StudentSignup from './components/StudentSignup';
import StudentHome from './components/StudentHome';
import UpdateStudent from './components/UpdateStudent';
import AdminHome from './components/AdminHome';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { FormContextProvider } from './components/FormContext';
import { ThemeProvider } from './components/ThemeContext';
import { UserProvider } from './components/UserContext';
// import { createBrowserHistory } from 'history';

function App() {
  // const history = createBrowserHistory();
  return (
    <div className="App">
      <UserProvider>
        <FormContextProvider>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<InitialPage />} />
            <Route path="/admin" element={<AdminGetInPage />} />
            <Route path="/student" element={<StudentGetInPage />} />
            <Route path="/adminSignup" element={<AdminSignUp />} />
            <Route path="/studentSignup" element={<StudentSignup />} />
            <Route path="/studentHome" element={<StudentHome />} />
            <Route path="/updateStudent" element={<UpdateStudent />} />
            <Route path="/adminHome" element={<AdminHome />} />
          </Routes>
          <Footer className="footer" />
        </FormContextProvider>
      </UserProvider>

    </div>
  );
}

export default App;
