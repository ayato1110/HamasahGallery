import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Produk } from './pages/Produk';
import { Galeri } from './pages/Galeri';
import { CaraPesan } from './pages/CaraPesan';
import { TentangKami } from './pages/TentangKami';
import { Kontak } from './pages/Kontak';
import { PertanyaanUmum } from './pages/PertanyaanUmum';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';

function Root() {
  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'produk', Component: Produk },
      { path: 'galeri', Component: Galeri },
      { path: 'cara-pesan', Component: CaraPesan },
      { path: 'tentang-kami', Component: TentangKami },
      { path: 'kontak', Component: Kontak },
      { path: 'pertanyaan-umum', Component: PertanyaanUmum },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogDetail },
    ],
  },
]);
