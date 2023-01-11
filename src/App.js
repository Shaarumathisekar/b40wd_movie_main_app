import "./App.css";
import { User } from "./User";
import { Welcome, double } from "./Welcome";

console.log(double(80));

//Component(view + Logic) declaration
function App() {
  //const names = ["Shaaru", "Siva", "Mathi"];
  const users = [
    {
      name: "Shaaru",
      pic: "https://i.pinimg.com/474x/18/42/e0/1842e0a27e99d543826637ea313c2e13.jpg"
    },
    {
      name: "Siva",
      pic: "https://1fid.com/wp-content/uploads/2022/07/boy-anime-wallpaper-image-for-profile-pic-29-504x1024.jpg"
    },
    {
      name: "Mathi",
      pic: "https://i.pinimg.com/originals/81/cc/98/81cc981ffe4500e11209a25d650a3596.jpg"
    },
  ];
  return (
    <div className="App">
      {/* {names.map((nm) => (
        <Welcome name={nm} />
      ))}  */}


      {users.map((usr) => (
        <User name={usr.name} pic={usr.pic}
        />
      ))}


    </div>
  );
}
export default App;
