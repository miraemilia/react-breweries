import { useState } from "react"
import { Box, Container, FormControl, Input, InputLabel, Typography } from "@mui/material"

import { Brewery } from "../types"
import { BreweryListItem } from "./BreweryListItem"

type BreweryListProps = {
    breweries: Brewery[]
    messageAll: string
}

export const BreweryList = ({ breweries, messageAll } : BreweryListProps) => {

    const [filter, setFilter] = useState('')

    const filteredBreweries : Brewery[] = breweries.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()))

    const handleFilterChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFilter(e.target.value)

  return (
    <main>
        <Container>
            <Typography variant='h2'>Brewery list</Typography>
            {messageAll ? <Typography>{messageAll}</Typography> : <></>}
            {breweries && 
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <FormControl sx={{padding: "1em"}}>
                    <InputLabel shrink={false} >Search breweries by name: </InputLabel>
                    <Input type="text" value={filter} onChange={(e) => handleFilterChange}/>
                </FormControl>
                    {filteredBreweries.map(b => 
                        <BreweryListItem brewery={b}/>
                    )}
                </Box>
            }
        </Container>
    </main>
  )
}