
import React from "react";
import './App.css';
import Card from "./Card";
import SeriesData from "./SeriesData";
// console.log(SeriesData[0].seriesName);
// console.log(SeriesData[0].imageLink);
function ncard(val){
  return(
    <Card 
          image={val.imageLink} 
          link={val.watchLink} 
          seriesOri={val.series}
          sname={val.seriesName}
        />
  );

}
function App() {
  return (
    <>
      <div className="heading">
        <h1>My Top Favourite Series</h1>
      </div>
      <div className="main_container">
        {/* <Card 
          image={SeriesData[0].imageLink} 
          link={SeriesData[0].watchLink} 
          seriesOri={SeriesData[0].series}
          sname={SeriesData[0].seriesName}
        />
        <Card 
          image={SeriesData[1].imageLink} 
          link={SeriesData[1].watchLink} 
          seriesOri={SeriesData[1].series}
          sname={SeriesData[1].seriesName}
        />
        <Card 
          image={SeriesData[2].imageLink} 
          link={SeriesData[2].watchLink} 
          seriesOri={SeriesData[2].series}
          sname={SeriesData[2].seriesName}
        />
        <Card 
          image={SeriesData[3].imageLink} 
          link={SeriesData[3].watchLink} 
          seriesOri={SeriesData[3].series}
          sname={SeriesData[3].seriesName}
        />
        <Card 
          image={SeriesData[4].imageLink} 
          link={SeriesData[4].watchLink} 
          seriesOri={SeriesData[4].series}
          sname={SeriesData[4].seriesName}
        /> */}
        {SeriesData.map(ncard)}
        
      </div>
    </>
  );
}

export default App;
