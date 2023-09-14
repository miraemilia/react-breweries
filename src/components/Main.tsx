import { Brewery } from "../types"
import { BreweryListItem } from "./BreweryListItem"

type MainProps = {
    breweries: Brewery[]
    singleBrewery: Brewery | undefined
    messageAll: string
    messageOne: string
}

export const Main = ({ breweries, singleBrewery, messageAll, messageOne } : MainProps) => {
    console.log(singleBrewery)
  return (
    <div>
        <h2>Selected brewery</h2>
        {messageOne ? <p>{messageOne}</p> : <></>}
        {singleBrewery && <BreweryListItem brewery={singleBrewery}/>}
        <h2>Brewery list</h2>
        {messageOne ? <p>{messageAll}</p> : <></>}
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
