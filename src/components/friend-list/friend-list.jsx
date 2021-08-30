import PropTypes from "prop-types";
import s from "./friend-list.module.css";

function FriendList({ friends }) {
  return (
    <section className={s.friends}>
      <ul className={s.friendList}>
        {friends.map((f) => (
          <li key={f.id} className={s.item}>
            <span className={String(f.isOnline)} />
            <img className={s.avatar1} src={f.avatar} alt={f.name} width="48" />
            <p className={s.name}>{f.name}</p>
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
