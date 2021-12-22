import "./styles.css";
import { AiFillHome, AiOutlineBarChart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <AiFillHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/charts" className="link">
              <li className="sidebarListItem active">
                <AiOutlineBarChart className="sidebarIcon" />
                Charts
              </li>
            </Link>
          </ul>

          {/* <Link to="/charts" className="link">
              <li className="sidebarListItem">
                <PieChart className="sidebarIcon" />
                Charts
              </li>
            </Link> */}
        </div>
      </div>
    </div>
  );
}
