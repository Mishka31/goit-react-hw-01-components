import PropTypes from "prop-types";
import defLogo from "./default.png"; //для примера
import "./profile.css";

export default function Profile({
  imageUrl = defLogo, //знаю что не обязательно, один раз попробовать))
  tag,
  name = "не известно", //для примера
  location,
  stats,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={imageUrl} alt={tag} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="containerStats first">
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li className="containerStats second">
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li className="containerStats third">
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
