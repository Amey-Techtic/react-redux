import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer.js';
import HeaderContainer from './containers/HeaderContainer.js';

function App() {
  return (
    <div className="App">
     {/* <h1>App Component</h1> */}
      {/* <User data={{name: 'Amey SW', age:24}}/> */}
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
