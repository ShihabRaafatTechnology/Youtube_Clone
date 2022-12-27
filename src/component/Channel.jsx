import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {CardMedia} from "@mui/material";
import {demoProfilePicture} from "../utils/constants";
import { fetchFromAPI } from '../utils/fetchFromAPI'; 


const Channel = () => {


  return (
    <Link>
       <CardMedia
        image={demoProfilePicture}
        alt='circle'
        sx={{borderRadius: "50%", height: "40px", width: "40px", border: "1px solid #e3e3e3", mr: 1}}/>
    </Link>
  )
}

export default Channel