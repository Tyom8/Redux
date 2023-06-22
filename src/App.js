import { Route, Routes } from 'react-router';
import './App.css';
import Login from './components/LoginPage/Login';
import Main from './components/MainPage/Main';
import Comment from './components/CommentPage/Comment';
import { useSelector } from 'react-redux';

function App() {
  const pageBackground = useSelector(state => state.changeBackground);
  return (
    <div className="App" style={{
      backgroundColor: pageBackground
    }}>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/comment' element={<Comment/>}></Route>
      </Routes>
    </div>
  );
}



// function App() {
//   const colorRef = useRef();
//   const [name,setName] = useState("#ffffff");
//   const nameFn = useCallback((event)=> {
//     event.preventDefault()
//     setName(colorRef.current.value)
//   },[name]);
//   console.log(name);
//   return (
//     <div className="App" style={{
//       backgroundColor: name
//     }}>
//       <form>
//         <input ref={colorRef} type='color' onChange={nameFn}></input>
//         <button>adsdsadsa</button>
//       </form>
//     </div>
//   );
// }

export default App;