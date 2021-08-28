// import "./App.css";
import Frofile from "./components/profile/profile";
import user from "./components/profile/user.json";
import Statistics from "./components/statistics/statistics";
import statJson from "./components/statistics/statistical-data.json";
import FriendList from "./components/friend-list/friend-list.jsx";
import friends from "./components/friend-list/friends.json";

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
      <Statistics title="Upload stats" stats={statJson} />
      <FriendList friends={friends} />
    </div>
  );
}
