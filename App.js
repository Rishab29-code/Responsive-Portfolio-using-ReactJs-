
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesExperience from './components/ServicesExperience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <ServicesExperience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
