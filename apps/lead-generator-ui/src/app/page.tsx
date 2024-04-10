import { BUSINESS_SPECIFIC_DATA } from "@/globals";
import { Typography } from "@mui/material";
import React from "react";
export default function Home() {
  return (<div>
<Typography>
  This website is meant to be requested thru a reverse proxy. 
  If you are seeing this page, please configure your /etc/hosts file to point to
  this application over of the of following domains:

  <ul>
  {Object.keys(BUSINESS_SPECIFIC_DATA).map(x=> <li key={x}><a href={`http://${x}.local:3000`}>http://{x}.local:3000</a></li>)}
  </ul>
</Typography>

  </div>)
}