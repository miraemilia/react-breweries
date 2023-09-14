import { Brewery } from "../types"

type ItemProps = {
  brewery: Brewery
}

export const BreweryListItem = ({ brewery } : ItemProps) => {
  return (
    <div key={brewery.id}>
      <h3>{brewery.name}</h3>
      <p>{brewery.country} - {brewery.state_province} - {brewery.city}</p>
      <p>Brewery type: {brewery.brewery_type}</p>
      <a href={brewery.website_url}>{brewery.name} website</a>
    </div>
  )
}
