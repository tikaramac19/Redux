import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
function App() {
  return (
    <>
      <AddUsers />

      <UsersList users = {[]}/>
    </>
  );
}

export default App;
