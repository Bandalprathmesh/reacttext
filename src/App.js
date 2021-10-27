
import './App.css';
import About from './components/About';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>

<Navbar  title="Textutils"  aboutText="About us" /> 
<div className="container">
{/* <TextForm  heading="text change to uppercase" /> */}

<About/>


</div>


    </>
  );
}

export default App;
