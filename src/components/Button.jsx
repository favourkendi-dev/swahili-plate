export default function Button({ children, href = '#menu' }) {
  return <a className="button" href={href}>{children}</a>;
}
