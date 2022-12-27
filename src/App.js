import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import {ChannelDetail, Feed, SearchFeed, VideoDetail} from "./component";

const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
          </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App