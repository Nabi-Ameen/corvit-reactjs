import Card from "./components/Card";
import kfc1 from "./images/kfc1.png"
import kfc2 from "./images/kfc2.png"
import kfc3 from "./images/kfc3.png"
import kfc4 from "./images/kfc4.png"

function App() {

  const products = [
    {
      id: 1,
      image: kfc1,
      title: "Twister Combo",
      desc: "Twister + 1 Regular fries + 1 Regular drink",
      price: "Rs 670"
    },
    {
      id: 2,
      image: kfc2,
      title: "Zinger Stacker Combo",
      desc: "Turn up the fun with 5 pcs Hot & Crispy",
      price: "Rs 1290"
    },
    {
      id: 3,
      image: kfc3,
      title: "Zinger Stacker Combo",
      desc: "1 Zinger Stacker + 1 Regular fries + 1",
      price: "Rs 890"
    }
  ]

  return (
    <div className="flex">

      {
        products.map((product) => (
          <>
            <Card product={product}/>
          </>
        ))
      }

      {/* <Card image={kfc1} title="Twister Combo" desc="Twister + 1 Regular fries + 1 Regular drink" price="Rs 670" />
      <Card image={kfc2} title="Zinger Stacker Combo" desc="1 Zinger Stacker + 1 Regular fries + 1" price="Rs 890" />
      <Card image={kfc3} title="Zinger Stacker Combo" desc="Turn up the fun with 5 pcs Hot & Crispy" price="Rs 1290" /> */}
    </div>
  );
}

export default App;
