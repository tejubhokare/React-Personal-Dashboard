import './App.css';
import ToDoList from './Component/ToDoList';
import UserProfile from './Component/UserProfile';
import Weather from './Component/Weather';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="left-container">
          <div className="profile-container">
            <UserProfile name="John Doe" email="john@example.com" profilePicture="https://via.placeholder.com/150" />
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
