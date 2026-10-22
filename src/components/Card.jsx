import useReveal from '../hooks/useReveal.js';

// Bento tile that fades in when scrolled into view
export default function Card({ as: Tag = 'article', className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`card reveal ${visible ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
