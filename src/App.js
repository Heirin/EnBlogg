import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Post from "./components/Post"
import artikler from "./artikkelliste.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="blog-wrapper">
        {artikler.map(artikkel=>(<Post heading={artikkel.tittel} content={artikkel.tekst}/>))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
