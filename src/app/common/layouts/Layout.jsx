import { Outlet, useLocation, useNavigate } from "react-router";
import BottomNavBar from "../navbar/BottomNavBar";
import SimpleTopBar from "../navbar/SimpleTopBar";

function Layout() {

  const location = useLocation();

  // Define a function to determine which string prop to pass based on the route
  const getNavbarProps = () => {
    const { pathname } = location;

    if (pathname === '/') {
      return { btnText: "crea lezione", withBtn: true, title: "Calendario", link: "/lezioni/crea" };
    }
    else if (pathname === '/corsi') {
      return { btnText: "crea corso", withBtn: true, title: "Corsi", link: "/corsi/crea" };
    }
    else if (pathname.includes('/corsi/crea')) {
      return { withBtn: false, title: "Nuovo corso" };
    }
    else if (pathname.includes('/lezioni/crea')) {
      return { withBtn: false, title: "Crea una lezione singola" };
    }
    else if (pathname.includes('/partecipanti')) {
      return { withBtn: false, title: "Iscritti e in coda" };
    }
    else if (pathname.includes("/corsi/modifica")) {
      return { withBtn: false, title: "Palinsesto del corso" };
    }
    else {
      return { withBtn: false, title: "Corsi" };
    }
  };


  /**
   * 
   * This should be a responsive layout with Topbar and FooterNavbar
   */
  return (
    <div style={{ padding: "0 0 104px 0" }}>
      <SimpleTopBar props={getNavbarProps()} />
      <Outlet />
      <BottomNavBar />
    </div>
  );
}

export default Layout