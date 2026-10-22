export default function Chips({ items, small = false }) {
  return (
    <ul className={small ? 'chips chips-sm' : 'chips'}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
