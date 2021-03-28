import React, {useState, useEffect} from 'react'

export default function Drinks() {

    const [drinks, setDrinks] = useState(true);
    useEffect(async () => {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        const  bebidas = await response.json();
        setDrinks(bebidas)
    }, [])
    console.log(bebidas)
    return (
        <div>
            <ul>
                <li>

                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    )
}
