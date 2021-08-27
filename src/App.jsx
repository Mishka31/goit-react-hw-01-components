// import "./App.css";
import Frofile from "./components/profile/profile";
import user from "./components/profile/user.json";

export default function App() {
  return (
    <div className="App">
      <Frofile
        imageUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
}
