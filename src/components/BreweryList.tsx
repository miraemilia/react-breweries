import { useState } from "react"
import { Brewery } from "../types"
import { BreweryListItem } from "./BreweryListItem"

type BreweryListProps = {
    breweries: Brewery[]
    messageAll: string
}

export const BreweryList = ({ breweries, messageAll } : BreweryListProps) => {

    const [filter, setFilter] = useState('')

    const filteredBreweries : Brewery[] = breweries.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <main>
        <h2>Brewery list</h2>
        {messageAll ? <p>{messageAll}</p> : <></>}
        <div>
            <p>Search breweries by name:</p>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
        </div>

        {breweries && 
            <ul>
                {filteredBreweries.map(b => 
                    <li key={b.id}><BreweryListItem brewery={b}/></li>
                )}
            </ul>
        }
    </main>
  )
}