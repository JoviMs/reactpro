import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Watermelon", "Oranges", "Banana"];
  const fruits = [
    { name: "Apple", price: 10, soldout: true },
    { name: "Watermelon", price: 50, soldout: false },
    { name: "Oranges", price: 25, soldout: true },
    { name: "Banana", price: 5, soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
