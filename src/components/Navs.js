import { Link } from "react-router-dom";
const LINK = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navs = () => {
  return (
    <ul>
      {LINK.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navs;
