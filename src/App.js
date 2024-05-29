import { useState } from "react";
import Card from "./components/Card";
import kfc1 from "./images/kfc1.png";
import kfc2 from "./images/kfc2.png";
import kfc3 from "./images/kfc3.png";
import kfc4 from "./images/kfc4.png"
import Button from "./components/Button";

function App() {

  // const products = [
  //   {
  //     id: 1,
  //     image: kfc1,
  //     title: "Twister Combo",
  //     desc: "Twister + 1 Regular fries + 1 Regular drink",
  //     price: "Rs 670"
  //   },
  //   {
  //     id: 2,
  //     image: kfc2,
  //     title: "Zinger Stacker Combo",
  //     desc: "Turn up the fun with 5 pcs Hot & Crispy",
  //     price: "Rs 1290"
  //   },
  //   {
  //     id: 3,
  //     image: kfc3,
  //     title: "Zinger Stacker Combo",
  //     desc: "1 Zinger Stacker + 1 Regular fries + 1",
  //     price: "Rs 890"
  //   }
  // ]


  const [isLoggin, setIsLogin] = useState(true)

  const [content, setContent] = useState("itemone")
  return (
    <div>
      <div className="">
        <div className="flex gap-5 border-b-2 w-1/2">
          <div className={`${content === "itemone" ? "text-blue-500 border-b-2 border-blue-800" : "" } p-5`} onClick={() => setContent("itemone")}>ITEM ONE</div>
          <div className={`${content === "itemtwo" ? "text-blue-500 border-b-2 border-blue-800" : "" } p-5`} onClick={() => setContent("itemtwo")}>ITEM TWO</div>
          <div className={`${content === "itemthree" ? "text-blue-500 border-b-2 border-blue-800" : "" } p-5`} onClick={() => setContent("itemthree")}>ITEM THREE</div>
        </div>
      </div>
      {
        content === "itemone" && <div>ITEM 1 CONTENT</div>
      }

      {
        content === "itemtwo" && <div>ITEM 2 CONTENT</div>
      }

      {
        content === "itemthree" && <div>ITEM 3 CONTENT</div>
      }


      <Button button= "fill"/>
      <Button button = "outline"/>


      





      {/* <button className={`${isLoggin ? "bg-blue-800" : "bg-red-500"} p-4 rounded-lg text-white`}>{isLoggin ? "logout" : "login"}</button> */}

      {/* {
          isLoggin ? (
            
          ) : (
            <button className="bg-blue-800 p-4 rounded-lg text-white" >
              login
            </button>
          )
        } */}


      {/* {
        products.map((product) => (
          <>
            <Card product={product}/>
          </>
        ))
      } */}





      {/* <button onClick={() => setIsToggle(!istoggle)} className="bg-blue-800 text-white ml-40">show</button>
      {
        istoggle ?
          <div className="fixed inset-0 bg-black/45 flex justify-center items-center ">
            <div className="w-96 h-96 bg-white ">
              <button onClick={() => setIsToggle(!istoggle)}>Close</button>
            </div>
            
            <Card image={kfc1} title="Twister Combo" desc="Twister + 1 Regular fries + 1 Regular drink" price="Rs 670" />
      <Card image={kfc2} title="Zinger Stacker Combo" desc="1 Zinger Stacker + 1 Regular fries + 1" price="Rs 890" />
      <Card image={kfc3} title="Zinger Stacker Combo" desc="Turn up the fun with 5 pcs Hot & Crispy" price="Rs 1290" />
          </div> : <></>
      } */}
    </div>
  );
}

export default App;
