import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignIn from './Pages/SingIn';
import SignUp from './Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardUser from './Pages/DashboardUser';
import EditProfile from './Pages/EditProfile';
import Sidebar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Conditional Header - Only for public routes */}
        <Routes>
          <Route path="/*" element={
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<Header />} />
              <Route path="/contact" element={<Header />} />
              <Route path="/signIn" element={<Header />} />
              <Route path="/signUp" element={<Header />} />
              <Route path="*" element={null} /> {/* No header for other routes */}
            </Routes>
          } />
        </Routes>
       
        <main className="flex-grow">
          <Routes>
            {/* Public routes with header */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            
            {/* Dashboard routes with sidebar (no header) */}
            <Route path='/dashboard' element={
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                  <DashboardUser />
                </div>
              </div>
            }/>
            
            <Route path='/editprofile' element={
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                  <EditProfile />
                </div>
              </div>
            }/>
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;