import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();


  return (
    <>
      <Navbar />

     { !isAuth && <Auth /> }
     
     {isAuth && <Profile />}

    </>
  );
}

export default App;
