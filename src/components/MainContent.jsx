import "./MainContent.css";
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardMain from "./CardMain";
import Fajr from "../assets/img/fajr-prayer.png";
import Dhhr from "../assets/img/dhhr-prayer-mosque.png";
import Asr from "../assets/img/asr-prayer-mosque.png";
import Night from "../assets/img/night-prayer-mosque.png";
import Sunset from "../assets/img/sunset-prayer-mosque.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";





export default function MainContent() {

  const handleChange = (event) => {
    console.log (event.target.value)
  };
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>20:20:20:20</h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>

        <Grid xs={6}>
          <div>
            <h2>المتبقي للصلاة القادمة </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>

      </Grid>

      <Divider style={{borderColor:"white" , opacity:0.1 }}/>

      <Stack direction="row" justifyContent={"space-around"} className="sta">
        <CardMain img = {Fajr} text = "الفجر" time = "04:10"/>
        <CardMain img = {Dhhr} text = "الظهر"  time = "12:42"/>
        <CardMain img = {Asr} text = "العصر"  time = "04:18"/>
        <CardMain img = {Night} text = "المغرب"  time = "07:00"/>
        <CardMain img = {Sunset} text = "العشاء"  time = "09:09"/>
        
      </Stack>

      <Stack direction={"row"} justifyContent={"center"}>
      <FormControl style={{width : "20%" , borderColor: "white" , marginTop: "40px"}}>
        <InputLabel id="demo-simple-select-label"><span className="sp1">المدينة</span></InputLabel>
        <Select
          style={{color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={10} >مكة</MenuItem>
          <MenuItem value={20}>دمشق</MenuItem>
          <MenuItem value={30}>بغداد</MenuItem>
        </Select>
      </FormControl>
      </Stack>

      


      



    </>
  )
}
