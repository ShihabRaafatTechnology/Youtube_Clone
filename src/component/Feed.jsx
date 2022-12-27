import {Box, Stack, Typography} from "@mui/material";
import {Sidebar, Videos, Navbar} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  

  const date = new Date().getFullYear();

  useEffect(()=>{
       fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
       .then((data) => setVideos(data.items))
  },[selectedCategory])
  return (
    <>
      <Navbar search={setSelectedCategory}/>
        <Stack sx={{ flexDirection: {sx:"column", md:"row"}}}>
          <Box sx={{height:{sx:"auto", md:"92vh"}, borderRight: "1px solid #3d3d3d", px:{sx:0, md:2}, color:"#fff"}}>
            <Sidebar 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}/>
            <Typography 
              className="copyright" 
              variant="body2"
              sx={{mt:1.5}}>Copyright {date} YouTube</Typography>
          </Box>

          <Box p={2} sx={{overflow: "auto", height: "90vh", flex:2}}>
            <Typography 
              variant="h4" 
              sx={{color:"white", fontWeight:"bold"}}
              mb={2}>
                {selectedCategory} <span style={{color:"#F31503"}}>videos</span>
            </Typography>

            <Videos videos={videos}/>
          </Box>
        </Stack>
    </>
  )
}

export default Feed