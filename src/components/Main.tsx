import { Brewery } from "../types"

type MainProps = {
    breweries: Brewery[]
}

export const Main = ({ breweries } : MainProps) => {
  return (
    <div>
        <h1>Brewery list</h1>
        {breweries && 
            <ul>
                {breweries.map(b => 
                    <li>
                        {b.name}
                    </li>
                )}
            </ul>
        }
    </div>
  )
}
