
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
import About from './components/About';
import { FormContextProvider } from './components/FormContext';
import { ThemeProvider } from './components/ThemeContext';
import { UserProvider } from './components/UserContext';
import ContactUs from './components/ContactUs';
import CampusTour from './components/CampusTour';
import Vision from './components/Vision';
import Administration from './components/Administration';
import OurPredecessors from './components/OurPredecessors';
import Privacy from './components/Privacy';
import Term from './components/Term';
import Notofications from './components/Notofications';
import Departments from './components/Departments';
import { DeptProvider } from './components/DeptContext';
import Payment from './components/Payment';
import { AmountProvider } from './components/AmountContext';
import { PaymentMethodProvider } from './components/PaymentMethod';
// import { createBrowserHistory } from 'history';

function App() {
  // const history = createBrowserHistory();
  return (
    <div className="App">
      <PaymentMethodProvider>
        <AmountProvider>
          <DeptProvider>
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
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/campustour" element={<CampusTour />} />
                  <Route path="/vision" element={<Vision />} />
                  <Route path="/administration" element={<Administration />} />
                  <Route path="/ourpredecessors" element={<OurPredecessors />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/term" element={<Term />} />
                  <Route path="/notifications" element={<Notofications />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
                <Footer className="footer" />
              </FormContextProvider>
            </UserProvider>
          </DeptProvider>
        </AmountProvider>
      </PaymentMethodProvider>

    </div>
  );
}

export default App;
