import React, { Component } from "react";
// import moment from 'moment';
import { Grid, Typography } from "@mui/material";
const styleTimer = {padding: "10px",fontSize: "17px",backgroundColor: "#ffffff1a",borderRadius: "12px",fontFamily:"Kalameh",width:"70px",height:"70px",display:"flex",justifyContent:"center",alignItems:"center"}; 

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("Aug 31, 2023 21:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <Grid   container direction="row" justifyContent="center" alignItems="center" >
        <Grid item  container direction="row" justifyContent="center" alignItems="center" spacing={2} md={4} xs={11} sx={{direction:"ltr"}} >
          <Grid container item xs={3}  >
            <Typography variant="p" component="h2" sx={styleTimer}>
              {days}<br />
              روز
            </Typography>
          </Grid>
          <Grid container item xs={3}>
            <Typography variant="p" component="h2" sx={styleTimer}>
              {hours}<br />
              ساعت
            </Typography>
          </Grid>
          <Grid container item xs={3}>
          
            <Typography variant="p" component="h2" sx={styleTimer}>
              {minutes}<br />
              دقیقه
            </Typography>
          </Grid>
          <Grid container item xs={3}>
            <Typography variant="p" component="h2" sx={styleTimer}>
              {seconds}<br />
              ثانیه
            </Typography>
          </Grid>
        </Grid>      
      </Grid>
    );
  }
}

export default CountDown;
