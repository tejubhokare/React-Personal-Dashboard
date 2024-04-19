
import './App.css';
import ToDoList from './Component/ToDoList';
import UserProfile from './Component/UserProfile';
import Weather from './Component/Weather';

function App() {
  return (
    <div className="App">


      <UserProfile name="John Doe" email="john@example.com" profilePicture="https://via.placeholder.com/150" />
      <Weather />
      <ToDoList />
    </div>
  );
}

export default App;
