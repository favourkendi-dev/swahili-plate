export default function BranchCard({ branch }) {
  return <article className="branch-card"><span>0{branch.id}</span><h3>{branch.name}</h3><p>{branch.location}</p><small>Open daily · {branch.hours}</small></article>;
}
