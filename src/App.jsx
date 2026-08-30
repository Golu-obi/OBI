import { useEffect } from 'react';
import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import CategoryBar from './components/CategoryBar.jsx';
import Hero from './components/Hero.jsx';
import StatBand from './components/StatBand.jsx';
import ProductRail from './components/ProductRail.jsx';
import BrandShowcase from './components/BrandShowcase.jsx';
import Manufacturing from './components/Manufacturing.jsx';
import Catalogues from './components/Catalogues.jsx';
import QualityExport from './components/QualityExport.jsx';
import Testimonials from './components/Testimonials.jsx';
import Notes from './components/Notes.jsx';
import Enquiry from './components/Enquiry.jsx';
import DealerCTA from './components/DealerCTA.jsx';
import Footer from './components/Footer.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import AboutPage from './components/AboutPage.jsx';
import ExportPage from './components/ExportPage.jsx';
import BlogIndex from './components/BlogIndex.jsx';
import BlogPost from './components/BlogPost.jsx';
import { useRoute } from './useRoute.js';

export default function App() {
  const route = useRoute();

  // Coming back to the home view from a routed page, honour the section in the
  // hash (#catalogues, #enquiry …) once its markup is mounted. Routed pages open
  // from the top.
  useEffect(() => {
    if (route.name !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const id = (route.hash || '').replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [route]);

  return (
    <div className="page">
      <TopBar />
      <Header />
      <CategoryBar />
      <main>{renderRoute(route)}</main>
      <Footer />
    </div>
  );
}

function renderRoute(route) {
  switch (route.name) {
    case 'product':
      return <ProductDetail code={route.code} />;
    case 'page':
      return route.page === 'export' ? <ExportPage /> : <AboutPage />;
    case 'blog':
      return <BlogIndex />;
    case 'post':
      return <BlogPost slug={route.slug} />;
    default:
      return (
        <>
          <Hero />
          <StatBand />
          <ProductRail />
          <BrandShowcase />
          <Manufacturing />
          <Catalogues />
          <QualityExport />
          <Testimonials />
          <Notes />
          <Enquiry />
          <DealerCTA />
        </>
      );
  }
}
