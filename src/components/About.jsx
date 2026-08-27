import { useState } from 'react';
import { useEffect } from 'react';

const team = [
  { name: 'Chef Asha Mwangala', role: 'Head Chef', image: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Chef Zubair Salim', role: 'Swahili Grill Specialist', image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Chef Neema Otieno', role: 'Pastry Chef', image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Mariam Salim', role: 'Restaurant Manager', image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Chef Baraka Ali', role: 'Grill & Seafood Chef', image: 'https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTeamMember((current) => (current + 1) % team.length);
    }, 4300);

    return () => clearInterval(timer);
  }, []);

  const member = team[activeTeamMember];

  return (
    <section className="bg-[#08110E] px-6 py-20 md:px-20" id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <img className="team-photo" key={member.name} src={member.image} alt={`${member.name}, ${member.role}`} />
          <div className="team-caption"><p>{member.role}</p><strong>{member.name}</strong></div>
          <div className="team-dots" aria-label="Our team members">{team.map((person, index) => <button className={index === activeTeamMember ? 'active' : ''} type="button" aria-label={`Show ${person.name}`} onClick={() => setActiveTeamMember(index)} key={person.name} />)}</div>
          <div className="absolute -bottom-6 -right-2 w-[200px] rounded-[18px] border border-white/10 bg-[#101E18] p-5 md:-right-6">
            <div className="flex items-center gap-3"><span className="text-3xl text-[#D4A857]">&#9733;</span><div><p className="text-xl font-bold text-white">10+</p><p className="text-[10px] text-white/40">Years of Experience</p></div></div>
            <div className="mt-4 flex -space-x-2"><img className="h-7 w-7 rounded-full border-2 border-[#101E18]" src="https://i.pravatar.cc/100?img=11" alt="Guest" /><img className="h-7 w-7 rounded-full border-2 border-[#101E18]" src="https://i.pravatar.cc/100?img=12" alt="Guest" /><img className="h-7 w-7 rounded-full border-2 border-[#101E18]" src="https://i.pravatar.cc/100?img=13" alt="Guest" /></div>
            <p className="mt-2 text-[9px] tracking-widest text-white/30">TRUSTED BY THOUSANDS</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.3em] text-[#D4A857]">&#8212; OUR STORY &#8212;</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">Bringing the Coast <br />to Nairobi Since 2015</h2>
          <p className="mt-5 text-[13px] leading-relaxed text-white/40">Swahili Plate was born from a passion to share the rich culinary heritage of the Swahili coast. Our recipes have been passed down through generations, using authentic coastal spices and fresh ingredients.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">{['Authentic Recipes|Traditional coastal flavours', 'Fresh Ingredients|Daily sourced & local', 'Family Friendly|Warm & welcoming', 'Fast Delivery|Across Nairobi'].map((item) => { const [title, description] = item.split('|'); return <div className="flex gap-3" key={title}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4A857]/10 text-sm text-[#D4A857]">&#10003;</span><div><p className="text-sm font-medium text-white">{title}</p><p className="mt-1 text-[11px] text-white/40">{description}</p></div></div>; })}</div>
          {isExpanded && <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-white/40">From Mombasa to Zanzibar, our kitchen celebrates the cooks, markets and family tables that shaped Swahili food. Every plate is prepared with patience, generous spice and a little sunshine from the coast.</p>}
          <button className="mt-8 rounded-full border border-[#D4A857] px-6 py-3 text-[11px] font-bold tracking-widest text-[#D4A857]" type="button" onClick={() => setIsExpanded((current) => !current)}>{isExpanded ? 'SHOW LESS' : 'LEARN MORE ABOUT US'}</button>
        </div>
      </div>
    </section>
  );
}