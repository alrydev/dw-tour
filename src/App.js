import '../src/assets/style/App.css'

import HomeUser from './pages/HomeUser';
import DetailTripPage from './pages/DetailTripPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import AddTripPage from './pages/AddTripPage';
import IncomeTripAdminPage from './pages/IncomeTripAdminPage';
import PayPage from './pages/PayPage';
import TransactionAdminPage from './pages/TransactionAdminPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exacth path="/" element={< HomeUser />} />
          <Route exacth path="/detail/:index" element={< DetailTripPage />} />
          <Route exacth path="/booking" element={< BookingPage />} />
          <Route exacth path="/profile" element={< ProfilePage />} />
          <Route exacth path="/transaction" element={< TransactionAdminPage />} />
          <Route exacth path="/add-trip" element={< AddTripPage />}/>
          <Route exacth path="/income-trip" element={< IncomeTripAdminPage />} />
          <Route exacth path="/pay" element ={< PayPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
