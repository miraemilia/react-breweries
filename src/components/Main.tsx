import { Brewery } from "../types"

type MainProps = {
    breweries: Brewery[]
}

export const Main = ({ breweries } : MainProps) => {
  return (
    <div>
        <h1>Brewery list</h1>
        {breweries && 
            <div>
                {breweries.map(b => 
                    <div id={b.id}>
                    <h3>{b.name}</h3>
                    <p>{b.country} - {b.state_province} - {b.city}</p>
                    <p>Brewery type: {b.brewery_type}</p>
                    <a href={b.website_url}>{b.name} website</a>
                    </div>
                )}
            </div>
        }
    </div>
  )
}
