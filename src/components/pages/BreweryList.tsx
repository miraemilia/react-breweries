import { useState } from "react"
import { Brewery } from "../../types"
import { BreweryListItem } from "./BreweryListItem"
import { Box, Container, FormControl, Input, InputLabel, TextField, Typography } from "@mui/material"

type BreweryListProps = {
    breweries: Brewery[]
    messageAll: string
}

export const BreweryList = ({ breweries, messageAll } : BreweryListProps) => {

    const [filter, setFilter] = useState('')

    const filteredBreweries : Brewery[] = breweries.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <main>
        <Container>
            <Typography variant='h2'>Brewery list</Typography>
            {messageAll ? <Typography>{messageAll}</Typography> : <></>}
            <FormControl sx={{padding: "1em"}}>
                <InputLabel disableAnimation={true}>Search breweries by name: </InputLabel>
                <Input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            </FormControl>
            {breweries && 
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    {filteredBreweries.map(b => 
                        <BreweryListItem brewery={b}/>
                    )}
                </Box>
            }
        </Container>
    </main>
  )
}