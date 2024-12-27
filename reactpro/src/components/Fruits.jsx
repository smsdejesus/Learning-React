import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Banana", "Cherry", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10.99,
      emoji: "🍎",
      soldout: false,
    },
    {
      name: "Mango",
      price: 2.99,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Banana",
      price: 1.99,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Pinaeapple",
      price: 10.99,
      emoji: "🍍",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
