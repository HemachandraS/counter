import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: Math.floor(Math.random()*100),
    notebooks: Math.floor(Math.random()*100),
    pens: Math.floor(Math.random()*100),
  });
    // Create add and remove functions here that changes the
    // state.
    function changebook(value){
      setInv({
        books: inv.books+value,
        notebooks: inv.notebooks,
        pens: inv.pens,
      })
    }

    function noteb(value){
      setInv({
        books: inv.books,
        notebooks: inv.notebooks+value,
        pens: inv.pens,
      })
    }

    function peny(value){
      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens+value,
      })
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>changebook(1)}> +</button>
        <button className="circlularButton" onClick={()=>changebook(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>noteb(1)}> +</button>
        <button className="circlularButton" onClick={()=>noteb(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>peny(1)}> +</button>
        <button className="circlularButton" onClick={()=>peny(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
   
            {/*calculate total and show it*/}

      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};
