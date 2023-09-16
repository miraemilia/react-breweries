import { Link } from "react-router-dom"
import { Brewery } from "../../types"
import { Button, CardActions, CardContent, Typography } from "@mui/material"
import { BreweryCard } from "../../styles/styledComponents"

type ItemProps = {
  brewery: Brewery
}

export const BreweryListItem = ({ brewery } : ItemProps) => {
  return (
    <BreweryCard key={brewery.id}>
      <CardContent>
        <Typography variant="h3">{brewery.name}</Typography>
        <Typography>{brewery.country} - {brewery.state_province} - {brewery.city}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/breweries/${brewery.id}`}>Details</Button>
      </CardActions>
    </BreweryCard>
  )
}
