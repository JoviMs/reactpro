export default function Fruit({ name, price, soldout }) {
  return (
    <div>
      <li>
        {name} {price} {soldout ? "soldout" : soldout}
      </li>
    </div>
  );
}
