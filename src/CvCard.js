import react from 'react'
import './App.css';

const CvCard = ({data}) => {
    console.log("data is", data)
    const dataCv = data.formation
    return (
        <div className="cv-card">
            <h1>Formation</h1>
           { dataCv.map((e, i) => 
           <div>
            
               <h2>{e.titre}</h2>
               <div className="institut-date">
               <span className="cv-card-h3">{e.institut}</span >
               <span className="cv-card-h3">({e.date})</span>
               
               </div>
               </div>)
           }
            <h1>
            </h1>
        </div>
    )
}
export default CvCard;
