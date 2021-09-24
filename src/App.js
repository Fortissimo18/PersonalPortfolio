import './App.css';
import NavBar from './Shared/navBar';
import homePage from './Home/homePage';
import experience from './Experience/experience';
import projects from './Projects/projects'; 
import hobby from './Hobby/hobby';
import { Route } from 'react-router';

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/' component={homePage} />
      <Route path='/experience' component={experience} />
      <Route path='/projects' component={projects} />
      <Route path='/hobby' component={hobby} />
    </>
  );
}

export default App;
