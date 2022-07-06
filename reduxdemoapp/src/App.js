import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();


  return (
    <>
      <Navbar />

     { !isAuth && <Auth /> }
     
     {isAuth && <Profile />}

      <Counter />
    </>
  );
}

export default App;
