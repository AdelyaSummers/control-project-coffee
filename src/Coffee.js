import React from "react";
import { useState } from "react";
function Coffee({itemsForSale}) {
    const [showMore, setShowMore] = useState(false);
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
    }
    
    return(
    <div className="products">
        {itemsForSale.map((element => {
            const{ id, coffeeName, searchTerm, description, price, image, showMore } = element;
            return(
                <div className="product-card" key={id}>
                    <img src={image} width="300px" height="300px" alt="img"/>
                    <div className="name-coffee">
                        <h2>{coffeeName}</h2>
                        <h3>{searchTerm}</h3>
                        <p>{showMore ? description : description.substring(0,100) + "...." }
                        <button className="btn" onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                        </p> 
                        <h4>$ {price}</h4>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Coffee;