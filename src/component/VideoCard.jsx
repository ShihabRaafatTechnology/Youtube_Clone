import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle} from "../utils/constants";
import {Channel} from "./";

const VideoCard = ({ video: {id: {videoId, channelId}, snippet}}) => {
  return (
    <Card sx={{ width: {md: "320px", xs: "100%"}, backgroundColor: "#000", boxShadow: "none"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {md: "358px", xs: "100%"}, height: 180, borderRadius: "20px"}}/>
      </Link>
      <CardContent sx={{height: "106px",  display:"flex"}}>
        <Channel/>
        <Box>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant="subtitle2" sx={{fontWeight: "bold", color: "#FFF", mb: 2}}>
                {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
              </Typography>
          </Link>
          <Link 
            to={snippet?.channelId ? `/channel/${channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" sx={{fontWeight:"bold", color:"gray", display:"flex", alignItems:"center"}}>
              {snippet?.channelTitle.slice(0, 20) || demoChannelTitle.slice(0, 20)}
              <CheckCircle sx={{fontSize: 12, color:"gray", ml:"5px"}}/>
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}

export default VideoCard