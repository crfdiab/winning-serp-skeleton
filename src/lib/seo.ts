
export interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object;
}

/**
 * Updates document metadata for SEO
 */
export const updateSeoMetadata = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/og-image.png',
  ogType = 'website',
  structuredData
}: SeoProps) => {
  // Update title
  document.title = `${title} | Winning SERP`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }

  // Update canonical URL
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalUrl) {
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      canonicalTag.href = canonicalUrl;
      document.head.appendChild(canonicalTag);
    }
  }

  // Update Open Graph metadata
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:type', ogType);
  updateMetaTag('og:image', ogImage);
  
  // Add structured data if provided
  if (structuredData) {
    updateStructuredData(structuredData);
  }
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (property: string, content: string) => {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (metaTag) {
    metaTag.setAttribute('content', content);
  } else {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }
};

/**
 * Updates structured data script tag
 */
const updateStructuredData = (data: object) => {
  // Remove existing structured data if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create and add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Initialize GTM
 */
export const initializeGTM = (gtmId: string) => {
  // Add GTM script
  const script = document.createElement('script');
  script.textContent = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);
  
  // Add GTM noscript iframe
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};
