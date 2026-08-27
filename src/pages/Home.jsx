import Hero from '../components/Hero.jsx';
import RatingCard from '../components/RatingCard.jsx';
import { useEffect, useState } from 'react';
import { dishes } from '../data/dishes.js';

function DishShowcase() {
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDish((current) => (current + 1) % dishes.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const dish = dishes[activeDish];
  const showDish = (index) => setActiveDish((index + dishes.length) % dishes.length);

  return <section className="dish-showcase" aria-label="Featured dishes">
    <div className="dish-showcase-image-wrap"><img className="dish-showcase-image" key={dish.id} src={dish.image} alt={dish.name} /></div>
    <div className="dish-showcase-content"><p className="eyebrow">Taste the coast</p><p className="dish-showcase-count">0{dish.id} / 0{dishes.length}</p><h2>{dish.name}</h2><p>{dish.description}</p><strong>KSh {dish.price.toLocaleString()}</strong><div className="dish-showcase-controls"><button type="button" aria-label="Previous dish" onClick={() => showDish(activeDish - 1)}>&larr;</button>{dishes.map((item, index) => <button className={index === activeDish ? 'active' : ''} type="button" aria-label={`Show ${item.name}`} onClick={() => showDish(index)} key={item.id} />)}<button type="button" aria-label="Next dish" onClick={() => showDish(activeDish + 1)}>&rarr;</button></div></div>
  </section>;
}

export default function Home() {
  return <><Hero /><DishShowcase /><section className="intro"><div><p className="eyebrow">Our table</p><h2>Food with a<br /><em>point of view.</em></h2></div><div><p>We cook the food we grew up with and the food we dream about. Every recipe carries a little of the coast: bright, generous and unapologetically spiced.</p><RatingCard /></div></section></>;
}
