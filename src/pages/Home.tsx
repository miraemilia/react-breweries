import { Link as RouterLink} from "react-router-dom"
import { Container, Button } from "@mui/material"

export const Home = () => {
  return (
    <Container>
        <Button component={RouterLink} to="breweries">Brewery list</Button>
    </Container>
  )
}
