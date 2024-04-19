import './App.css';
import ToDoList from './components/ToDoList';
import UserProfile from './components/UserProfile';
import Weather from './components/Weather';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <div className="left-container">
          <div className="profile-container">
            <UserProfile name="Tejaswi Bhokare" email="tejaswibhokare@gmail.com" profilePicture='./tejaswi.jpg' />
          </div>
          <div className="weather-container">
            <Weather />
          </div>
        </div>
        <div className="right-container">
          <ToDoList />
        </div>

      </div>
    </Provider>
  );
}

export default App;
