import './App.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
