import {Stack, Box} from "@mui/material";
import {VideoCard, ChannelCard, Channel} from "./";

const Videos = ({videos, justifyContent, marginTop}) => {
  return (
    <Stack sx={{justifyContent, marginTop}} direction="row" gap={2} color="white" flexWrap="wrap">
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
          {item.id.channelId && <Channel channelImage={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos