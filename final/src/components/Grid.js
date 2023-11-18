import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container } from "@mui/material";
const url = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';


const options ={
  params: {
    longitude: '109.19553',
    latitude: '12.235588',
  },
  headers: {
    'X-RapidAPI-Key': '91da9aa27dmsh0e84e116373f303p16c0aajsnab04bc4070bf',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const getPhotoData = async() => {
  try {
    const response = await axios.get(url, options);
  } catch (error){

  }
}

export default function Grida(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
      getPhotoData().then((data) => {
      console.log(data);
      setPhoto(data);
    })
    }, []);
 

return(
    <Container>
    <Grid container spacing={2}>
  <Grid item xs={8}>
  </Grid>
  <Grid item xs={4}>
  </Grid>
  <Grid item xs={3}>
  </Grid>
  <Grid item xs={6}>
  </Grid>
  <Grid item xs={3}>
  </Grid>
</Grid>
</Container>
)
}
