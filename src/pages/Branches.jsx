import { branches } from '../data/branches.js';
import BranchCard from '../components/BranchCard.jsx';

export default function Branches() { return <section className="branches" id="branches"><div className="section-heading"><p className="eyebrow">Find us</p><h2>Pull up a chair.</h2></div><div className="branch-grid">{branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)}</div></section>; }
