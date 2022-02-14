import react, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [user, setUser] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    //alimentarse de api
    const getData = await fetch("https://api.github.com/users/agusgrance");
    const dataToJson = await getData.json();
    setUser(dataToJson);
  }
  return (
    <div className="App">
      <Header />
      <div className="sitio">
        <Bio img={user.avatar_url} location={user.location} />
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
