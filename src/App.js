import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "./redux/actions/actionCreator";
import {useEffect} from "react";
import UserCard from "./components/UserCard";


function App() {

    const users = useSelector(store => store?.users?.acceptedUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        handleUsers()
    }, [])

    function handleUsers(){
        dispatch(getAllUsers())
    }

  return (
    <div className="App">
        {
            users.map((item) => (
               <UserCard item={item}/>
            ))
        }

    </div>
  );
}

export default App;
