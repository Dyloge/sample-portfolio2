import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import SampleProjects from "./pages/SampleProjects";
import FuturePlans from "./pages/FuturePlans";
import ProjectDetail from "./pages/ProjectDetail";
//Router
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path='/' exact>
          <AboutUs/>
        </Route>
        <Route path='/sample' exact>
          <SampleProjects/>
        </Route>
        <Route path='/sample/:id'>
          <ProjectDetail/>
        </Route>
        <Route path='/future'>
          <FuturePlans/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
