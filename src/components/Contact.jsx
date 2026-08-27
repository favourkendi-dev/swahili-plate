import { useState } from 'react';

const contactDetails = [
  ['&#9742;', 'Phone', '+254 712 345 678'], ['&#9993;', 'Email', 'info@swahiliplate.co.ke'], ['&#9998;', 'Whatsapp', '+254 712 345 678'], ['&#9679;', 'Location', 'Nairobi, Kenya'], ['&#9716;', 'Hours', 'Mon - Sun: 8:00 AM - 10:00 PM'],
];

export default function Contact() {
  const [isReserved, setIsReserved] = useState(false);
  const [serviceType, setServiceType] = useState('Table reservation');
  const sendReservation = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = `Jambo Swahili Plate! I would like a ${serviceType.toLowerCase()}.\nName: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nBranch: ${formData.get('branch')}\nDate: ${formData.get('date')}\nTime: ${formData.get('time')}\nGuests: ${formData.get('guests')}`;
    window.open(`https://wa.me/254712345678?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setIsReserved(true);
  };

  return (
    <section className="bg-[#08110E] px-6 py-20 md:px-20" id="contact">
      <div className="mb-12 text-center"><p className="text-[10px] tracking-[0.3em] text-[#D4A857]">&#10022; GET IN TOUCH &#10022;</p><h2 className="mt-2 font-serif text-3xl text-white">We'd Love to Hear From You</h2><p className="mx-auto mt-3 max-w-md text-xs text-white/40">Have a question, feedback or special request? Reach out to us and we'll get back to you.</p></div>
      <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">{contactDetails.map(([icon, label, value]) => <div className="flex gap-4" key={label}><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#101E18] text-[#D4A857]" dangerouslySetInnerHTML={{ __html: icon }} /><div><p className="text-[11px] text-white/40">{label}</p><p className="mt-1 text-[13px] text-white">{value}</p></div></div>)}</div>
        <form className="rounded-[20px] border border-white/10 bg-[#101E18] p-6 md:p-8" id="reservation" onSubmit={sendReservation}><div className="grid gap-4"><p className="mb-1 font-serif text-xl text-white">Reserve your table</p>{[['Your Name', 'name', 'Enter your name'], ['Phone Number', 'phone', 'Enter your phone number']].map(([label, name, placeholder]) => <label className="text-[11px] text-white/60" key={label}>{label}<input name={name} required className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none placeholder:text-white/20 focus:border-[#D4A857]/50" placeholder={placeholder} /></label>)}<label className="text-[11px] text-white/60">Branch<select name="branch" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none focus:border-[#D4A857]/50" defaultValue="Nairobi"><option>Nairobi</option><option>Mombasa</option><option>Dar es Salaam</option></select></label><div className="grid gap-4 sm:grid-cols-2"><label className="text-[11px] text-white/60">Date<input name="date" required type="date" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none focus:border-[#D4A857]/50" /></label><label className="text-[11px] text-white/60">Time<input name="time" required type="time" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none focus:border-[#D4A857]/50" /></label></div><div className="grid gap-4 sm:grid-cols-2"><label className="text-[11px] text-white/60">Guests<select name="guests" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none focus:border-[#D4A857]/50" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label><label className="text-[11px] text-white/60">Service<select name="service" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#08110E] px-4 py-3 text-xs text-white outline-none focus:border-[#D4A857]/50" value={serviceType} onChange={(event) => setServiceType(event.target.value)}><option>Table reservation</option><option>Delivery request</option></select></label></div><button className="w-full rounded-lg bg-[#FFC72C] py-3.5 text-[11px] font-bold tracking-widest text-black transition hover:bg-[#E9B62A]" type="submit">{isReserved ? 'REQUEST SENT TO WHATSAPP' : serviceType === 'Delivery request' ? 'REQUEST DELIVERY' : 'RESERVE TABLE'} &#8594;</button>{isReserved && <p className="text-center text-xs text-[#D4A857]">Your request is ready in WhatsApp for confirmation.</p>}</div></form>
      </div>
    </section>
  );
}