import { Link } from "react-router-dom"
import { Brewery } from "../types"

type ItemProps = {
  brewery: Brewery
}

export const BreweryListItem = ({ brewery } : ItemProps) => {
  return (
    <div key={brewery.id}>
      <h3>{brewery.name}</h3>
      <p>{brewery.country} - {brewery.state_province} - {brewery.city}</p>
      <Link to={`/${brewery.id}`}>Details</Link>
    </div>
  )
}
