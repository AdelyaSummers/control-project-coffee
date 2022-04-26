import React from "react";
function Buttons({filteredCoffee}) {
    return(
    <div className ="cont">
        <button className="change" onClick={() => filteredCoffee("Latte")}>Latte</button>
        <button className="change" onClick={() => filteredCoffee("Cappuccino")}>Cappuccino</button>
        <button className="change" onClick={() => filteredCoffee("Flat White")}>Flat White</button>
        <button className="change" onClick={() => filteredCoffee("Frappe")}>Frappe</button>
        <button className="change" onClick={() => filteredCoffee("Cortado")}>Cortado</button>
        <button className="change" onClick={() => filteredCoffee("Americano")}>Americano</button>
        <button className="change" onClick={() => filteredCoffee("Espresso")}>Espresso</button>
        <button className="change" onClick={() => filteredCoffee("Mocha")}>Mocha</button>
        <button className="change" onClick={() => filteredCoffee("Macchiato")}>Macchiato</button>
    </div>
    )
}
export default Buttons;