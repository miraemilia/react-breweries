import { Link } from "react-router-dom"
import { AppBar, Typography, Toolbar, Button, Icon } from '@mui/material';
import SportsBarTwoToneIcon from '@mui/icons-material/SportsBarTwoTone';
import { NavButtonGroup } from "../styles/styledComponents";

export const Header = () => {
  return (
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h1">Breweries<Icon component={SportsBarTwoToneIcon} fontSize="inherit" /></Typography>
          <NavButtonGroup variant="contained">
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="breweries">Brewery list</Button>
            <Button component={Link} to="about">About</Button>
          </NavButtonGroup>         
        </Toolbar>
      </AppBar>
  )
}
