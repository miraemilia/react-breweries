import { Brewery } from "../types"
import { BreweryListItem } from "./BreweryListItem"

type MainProps = {
    breweries: Brewery[]
}

export const Main = ({ breweries } : MainProps) => {
  return (
    <div>
        <h2>Brewery list</h2>
        {breweries && 
            <div>
                {breweries.map(b => 
                    <BreweryListItem brewery={b}/>
                )}
            </div>
        }
    </div>
  )
}
