import { Outlet, useLocation, useNavigate } from "react-router";

import "../../base.css"
import BottomNavBar from "./BottomNavBar";
import SimpleTopBar from "./SimpleTopBar";

function Layout() {

  const navigate = useNavigate();
  const location = useLocation();

  // Define a function to determine which string prop to pass based on the route
  const getNavbarProps = () => {
    const { pathname } = location;

    // Add your logic to determine the prop based on the route
    if (pathname === '/') {
      return { btnText: "crea lezione", bgcol: "#6DA34D", withBtn: true, withIcon: true, title: "Calendario", link: "/lezioni/crea" };
    } else if (pathname === '/corsi') {
      return { btnText: "crea corso", bgcol: "#6DA34D", withBtn: true, withIcon: true, title: "Corsi", link: "/corsi/crea" };
    }
    else if (pathname.includes('/corsi/crea')) {
      return { withBtn: false, withIcon: false, title: "Crea un nuovo corso/palinsesto" };
    }
    else if (pathname.includes('/lezioni/crea')) {
      return { withBtn: false, withIcon: false, title: "Crea una lezione singola" };
    }
    else if (pathname.includes('/partecipanti')) {
      return { withBtn: false, withIcon: false, title: "Partecipanti" };
    }
    else if (pathname.includes("/corsi/modifica")) {
      return { bgcol: "#6DA34D", withBtn: false, withIcon: true, title: "Palinsesto" };
    } else {
      return { bgcol: "#6DA34D", withBtn: false, withIcon: false, title: "Corsi" };
    }
  };


  /**
   * 
   * This should be a responsive layout with Topbar and FooterNavbar
   */
  return (
    <div style={{ padding: "0" }}>
      <SimpleTopBar props={getNavbarProps()} />
      <div style={{ marginTop: "90px" }}>
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
}

export default Layout