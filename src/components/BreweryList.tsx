import { Brewery } from "../types"
import { BreweryListItem } from "./BreweryListItem"

type BreweryListProps = {
    breweries: Brewery[]
    messageAll: string
}

export const BreweryList = ({ breweries, messageAll } : BreweryListProps) => {
  return (
    <main>
        <h2>Brewery list</h2>
        {messageAll ? <p>{messageAll}</p> : <></>}
        {breweries && 
            <ul>
                {breweries.map(b => 
                    <li key={b.id}><BreweryListItem brewery={b}/></li>
                )}
            </ul>
        }
    </main>
  )
}