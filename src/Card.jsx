import React from "react";


const Card=(props)=>{
    return(
        <>
            <div className="card_container">
                <div className="img_container">
                    <img src={props.image} alt="seriesCover" className="img_style"/>
                </div>
                <div className="details_watch_container">
                    <h2>{props.sname}</h2>
                    <h3>{props.seriesOri}</h3>
                    <a href={props.link}><button>Watch Now</button></a>
                </div>
            </div>
        </>
    );

}
export default Card;