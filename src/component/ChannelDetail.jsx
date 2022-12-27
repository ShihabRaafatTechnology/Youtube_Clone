import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  }, [id]);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
  }, [id]);

  return (
    <Box minHeight="100vh">
      <Box>
          <div 
            style={{ backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,height: "300px", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition: 'center'}}/>
          <ChannelCard channel={channelDetail} marginTop="-110px"/>
      </Box>
      <Videos videos={videos} justifyContent="center" marginTop="80px"/>
    </Box>
  )
}

export default ChannelDetail