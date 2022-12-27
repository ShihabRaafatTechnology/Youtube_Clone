import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({search}) => {
  const [searchData, setSearchData] = useState();
  return (
    <Paper 
        component="form" 
        onSubmit={(e)=>{e.defaultPrevented()}}
        sx={{
            borderRadius:20,
            border: "1px solid #e3e3e3",
            pl:2,
            mr: { sm: 5 }
        }}>
        <input
            className="search-bar"
            placeholder="Search..."
            onChange={(e)=>{setSearchData(e.target.value)}}/>
            <IconButton 
                sx={{p:"10px", color:"red"}}>
                    <Search onClick={()=>{search(searchData)}} />
            </IconButton>
    </Paper>
  )
}

export default SearchBar