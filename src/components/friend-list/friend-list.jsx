import PropTypes from "prop-types";
import "./friend-list.css";

function FriendList({ friends }) {
  return (
    <section className="statistics">
      <ul className="friend-list">
        {friends.map((f) => (
          <li key={f.id} className="item">
            <span className={String(f.isOnline)} />
            <img className="avatar1" src={f.avatar} alt={f.name} width="48" />
            <p className="name">{f.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default FriendList;
