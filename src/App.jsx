import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./components/Logout";
import "./App.css";
import image from "./assets/image.png";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="container">
      <img className="image" src={image} alt="img" />
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
