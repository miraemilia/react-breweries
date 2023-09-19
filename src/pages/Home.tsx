import { Container, Button } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"

export const Home = () => {
  return (
    <Container>
        <Button component={RouterLink} to="breweries">Brewery list</Button>
    </Container>
  )
}
