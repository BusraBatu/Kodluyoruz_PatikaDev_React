
import "./App.css";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div className="App">
    <Contacts/>
    </div>
  );
}

export default App;
  /*PRACTICE 1
      
      import axios from "axios";

 const getData=async (userId)=>{
  const {data: user}=await axios("https://jsonplaceholder.typicode.com/users/"+userId);
  const{data: postData}=await axios("https://jsonplaceholder.typicode.com/posts?id="+ userId);


  return {user, postData};
}
export default getData;*/