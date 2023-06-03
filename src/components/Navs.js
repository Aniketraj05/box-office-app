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
    <ol>
      {LINK.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Navs;
