import { dishes } from '../data/dishes.js';
import FoodCard from '../components/FoodCard.jsx';
import { useState } from 'react';

const menuFilters = ['All', 'Mains', 'Seafood', 'Snacks', 'Breakfast', 'Drinks'];
const whatsappNumber = '254712345678';

export default function Menu() {
  const [order, setOrder] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSent, setIsSent] = useState(false);
  const addToOrder = (dish) => { setIsSent(false); setOrder((current) => { const existing = current.find((item) => item.id === dish.id); return existing ? current.map((item) => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...dish, quantity: 1 }]; }); };
  const changeQuantity = (id, amount) => setOrder((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0));
  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const filteredDishes = activeFilter === 'All' ? dishes : dishes.filter((dish) => {
    if (activeFilter === 'Mains') return ['Chef\'s Special', 'Signature Dish', 'Authentic Coastal', "Today's Specials"].includes(dish.category);
    return dish.category.includes(activeFilter) || (activeFilter === 'Seafood' && dish.name.includes('Fish'));
  });
  const visibleDishes = showAll ? filteredDishes : filteredDishes.slice(0, 4);
  const sendOrderToWhatsApp = () => {
    const details = order.map((item) => `${item.quantity}x ${item.name} (KSh ${item.price.toLocaleString()})`).join('%0A');
    window.open(`https://wa.me/${whatsappNumber}?text=Jambo%20Swahili%20Plate!%20I%27d%20like%20to%20order:%0A${details}%0A%0ATotal:%20KSh%20${total.toLocaleString()}`, '_blank', 'noopener,noreferrer');
  };

  return <section className="menu" id="menu"><div className="section-heading"><p className="eyebrow">From the Swahili kitchen</p><h2>Today’s favourites</h2><p className="menu-note">Coastal flavours, made fresh in Nairobi. Choose a plate and build your order.</p></div><div className="menu-filters" aria-label="Filter dishes">{menuFilters.map((filter) => <button className={activeFilter === filter ? 'active' : ''} type="button" onClick={() => { setActiveFilter(filter); setShowAll(false); }} key={filter}>{filter}</button>)}</div><div className="food-grid">{visibleDishes.map((dish, index) => <FoodCard key={dish.id} dish={dish} onOrder={addToOrder} isAdditional={showAll && index >= 4} />)}</div>{filteredDishes.length > 4 && <button className="explore-dishes" type="button" onClick={() => setShowAll((current) => !current)}>{showAll ? 'Show fewer dishes' : 'Explore more dishes'} <span aria-hidden="true">{showAll ? '↑' : '↓'}</span></button>}{order.length > 0 && <aside className="order-panel" aria-live="polite"><div className="order-heading"><div><p className="eyebrow">Your table</p><h3>Your order <span>{order.reduce((sum, item) => sum + item.quantity, 0)}</span></h3></div><button className="clear-order" type="button" onClick={() => setOrder([])}>Clear</button></div><div className="order-items">{order.map((item) => <div className="order-item" key={item.id}><img src={item.image} alt="" /><div><strong>{item.name}</strong><p>KSh {item.price.toLocaleString()} each</p></div><div className="quantity"><button type="button" aria-label={`Remove one ${item.name}`} onClick={() => changeQuantity(item.id, -1)}>&minus;</button><span>{item.quantity}</span><button type="button" aria-label={`Add one ${item.name}`} onClick={() => changeQuantity(item.id, 1)}>+</button></div></div>)}</div><div className="order-total"><strong>Total <span>KSh {total.toLocaleString()}</span></strong><button type="button" onClick={() => { setIsSent(true); sendOrderToWhatsApp(); }}>{isSent ? 'ORDER SENT' : 'ORDER ON WHATSAPP'} <span aria-hidden="true">&rarr;</span></button></div></aside>}</section>;
}
