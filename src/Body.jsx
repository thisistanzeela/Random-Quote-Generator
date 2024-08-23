import CardData from "./CardData";
import { useState, useEffect } from "react";

let Body = () => {

  let [changeQuote, setChangeQuote] = useState([]);

  let fetchQuote = async () => {
    let quotes = await fetch("https://api.quotable.io/quotes/random");
    let json = await quotes.json();
    setChangeQuote(json);
    console.log(json)
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {changeQuote.map((quote, index) => (
        <CardData 
          key={index} 
          quote={quote.content} 
          author={quote.author} 
          onChangeQuote={fetchQuote} 
        />
      ))}
    </div>
  );
};

export default Body;
