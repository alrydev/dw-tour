import '../src/assets/style/App.css'

import HomeUser from './pages/HomeUser';
import DetailTripPage from './pages/DetailTripPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exacth path="/" element={< HomeUser />} />
          <Route exacth path="/detail" element={< DetailTripPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
