import Header from '@/components/site/Header';
import AboutUs from '@/components/site/AboutUs';
import ProductCatalog from '@/components/site/ProductCatalog';
import BecomeFranchisee from '@/components/site/BecomeFranchisee';
import Blog from '@/components/site/Blog';
import Events from '@/components/site/Events';
import Testimonials from '@/components/site/Testimonials';
import Support from '@/components/site/Support';
// pages/cart-locator.tsx (or another file, if you prefer)
import dynamic from 'next/dynamic';

const CartLocator = dynamic(() => import('../../components/site/CartLocator'), {
  ssr: false, // Disable SSR for this component
});

export default function IndexPage() {
  // Enable static rendering

  return (
    <div>
      <Header />
      <AboutUs />
      <ProductCatalog />
      <BecomeFranchisee />
      <CartLocator />
      <Blog />
      <Events />
      <Testimonials />
      <Support />
    </div>
  );
}
