import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className=' border border-white rounded-lg w-[50%] h-[50%]'>
        <SearchBar/>
        <StudentList/>
        </div>
      </header>
    </div>
  );
}

export default App;
