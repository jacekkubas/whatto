import './App.css';
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="container">
      <Header title="header" />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
