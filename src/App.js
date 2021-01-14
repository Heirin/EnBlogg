import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Post from "./components/Post"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="blog-wrapper">
      <Post heading="Jeg lager en blogg" content="Dette er et innlegg om hvordan jeg lager en blogg. Denne teksten skal egentlig autogenereres fra en database. vi får se hvordan det går."/>
      <Post heading="Organisering av innhold" content="Jeg tenker å generere innleggene med nyeste innlegg øverst."/>
      <Post heading="Videreutvikling" content="Jeg tenker å lage innlogging for admin, sånn at jeg kan redigere innholdet fra websiden."/>
      <Post heading="Layout på innlegg" content="Jeg vil også finne ut hvordan jeg kan tilpasse bilder og sånt."/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
