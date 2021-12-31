import bootstrap from "bootstrap"
const Prez = ({prezData}) => {
    console.log("pres is : ", prezData[0])
    let e = prezData[0]
    return (
        <>
        <div>hello</div>
       {/*  {prezData.map((e, i) => { */}
 <div className="presentation-div">
     <div className="col-3">
         <img src={e.img} alt={e.alt} title={e.title} />
     </div>
     <div className="col-9">
 <h2>{e.FirstName} {e.LastName} </h2>
 <span>{e.qualite} {e.spe}</span>
 <span>{e.message}</span>
         </div>
         </div>
       {/*  }
       
         ) } */}
  </>
    )
}
export default Prez;
