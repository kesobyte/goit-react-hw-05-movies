import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import css from './SharedLayout.module.css';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />

        {/* Fallback Loader while Waiting / Similar to isLoading Component */}
        <Suspense fallback={<Loader />}>
          {/* Outlet should be used in parent route elements to render their child route elements */}
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
