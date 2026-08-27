const reviews = [
  { quote: 'The biryani tasted like a Sunday afternoon on the coast. Rich, fragrant and beautifully generous.', name: 'Amina K.', detail: 'Nairobi regular', rating: 5 },
  { quote: 'The grilled fish and coconut rice are exceptional. Swahili Plate is now our family tradition.', name: 'David M.', detail: 'Mombasa guest', rating: 5 },
  { quote: 'Warm service, honest flavours and the best mishkaki in town. We will absolutely be back.', name: 'Zawadi O.', detail: 'Verified diner', rating: 5 },
];

export default function Reviews() {
  return <section className="reviews-section"><div className="section-heading"><p className="eyebrow">From our guests</p><h2>Served with love.</h2></div><div className="reviews-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}</div><blockquote>“{review.quote}”</blockquote><p className="review-name">{review.name}</p><p className="muted">{review.detail}</p></article>)}</div></section>;
}
