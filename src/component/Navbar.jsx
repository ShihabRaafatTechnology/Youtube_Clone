import {Stack} from "@mui/material";
import {Link} from "react-router-dom";

import {logo} from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = ({search}) => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{position:"sticky", justifyContent:"space-between"}}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" height={40}/>
        <h1 className="space">YouTube</h1>
      </Link>
      <SearchBar search={search}/>
    </Stack>
  )
}

export default Navbar