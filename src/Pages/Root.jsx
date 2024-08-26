import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
