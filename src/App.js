import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import { SearchStudent } from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import { ViewAll } from './components/ViewAll';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes path='/' element={<AddStudent/>}/>
    <Routes path='/SearchStudent' element={<SearchStudent/>}/>
    <Routes path='/DeleteStudent' element={<DeleteStudent/>}/>
    <Routes path='/ViewAll' element={<ViewAll/>}/>
    
      </BrowserRouter>
  );
}

export default App;
