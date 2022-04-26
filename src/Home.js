import React from"react";
import { useState } from "react";
import { data } from "./data";
import Coffee from "./Coffee";
import Buttons from "./Buttons";

function Home(){
    const [ coffee, setCoffee ] = useState(data);
    
    const chosenCoffee = (searchTerm) => {
      const newCoffee = data.filter(element => element.searchTerm === searchTerm);
      setCoffee(newCoffee);
    }
    return (<div>
        <Buttons filteredCoffee={ chosenCoffee }/>
        <Coffee itemsForSale={coffee}/>
      </div>
    )    
}

export default Home;