import { useEffect, useState } from 'react';

// Tiny hash router. Most of the site is one page of anchor links (#enquiry,
// #catalogues …); a few hashes are full routed pages instead.
//   #product/DL-118-SS   -> { name: 'product', code: 'DL-118-SS' }
//   #company             -> { name: 'page', page: 'company' }
//   #export              -> { name: 'page', page: 'export' }
//   #blog                -> { name: 'blog' }
//   #blog/some-slug      -> { name: 'post', slug: 'some-slug' }
//   anything else        -> { name: 'home', hash: '#…' }
const PAGES = ['company', 'export'];

export function parseHash(hash) {
  const h = (hash || '').replace(/^#/, '');
  const product = h.match(/^product\/(.+)$/);
  if (product) return { name: 'product', code: decodeURIComponent(product[1]) };

  const post = h.match(/^blog\/(.+)$/);
  if (post) return { name: 'post', slug: decodeURIComponent(post[1]) };

  if (h === 'blog') return { name: 'blog' };
  if (PAGES.includes(h)) return { name: 'page', page: h };

  return { name: 'home', hash: hash || '' };
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function goToProduct(code) {
  window.location.hash = 'product/' + encodeURIComponent(code);
}

export function goToPost(slug) {
  window.location.hash = 'blog/' + encodeURIComponent(slug);
}

// Leave a routed page for a section of the home page. App watches the route and
// scrolls to the section once the home markup is mounted.
export function goHome(sectionId) {
  window.location.hash = sectionId ? '#' + sectionId : '';
}
