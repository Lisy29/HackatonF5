import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Nav/> {/* Agregar Navbar */}
        <Outlet />
       {/* <Footer/>Agregar Footer */}
      </>
  );
};

export default Layout;
