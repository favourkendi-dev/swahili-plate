import { useEffect, useState } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop', alt: 'A generous shared Swahili meal on a restaurant table', className: 'gallery-large' },
  { src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop', alt: 'Fresh chicken biryani with fragrant rice' },
  { src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop', alt: 'Grilled fish served with coastal flavours' },
  { src: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'An African chef preparing a Swahili Plate dish' },
  { src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop', alt: 'Mishkaki skewers ready to share' },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveImage((current) => (current + 1) % galleryImages.length), 3800);
    return () => clearInterval(timer);
  }, []);

  const image = galleryImages[activeImage];
  return <section className="gallery-section"><div className="section-heading"><p className="eyebrow">A taste of our table</p><h2>Made for sharing.</h2></div><div className="gallery-showcase"><img className="gallery-feature" key={image.src} src={image.src} alt={image.alt} /><div className="gallery-caption"><span>0{activeImage + 1} / 0{galleryImages.length}</span><p>{image.alt}</p></div><div className="gallery-dots" aria-label="Gallery photos">{galleryImages.map((item, index) => <button className={index === activeImage ? 'active' : ''} type="button" aria-label={`Show gallery image ${index + 1}`} onClick={() => setActiveImage(index)} key={item.src} />)}</div></div></section>;
}
