import react from 'react'
import CvCard from './CvCard'
import {CvData, PresentationData} from './data.js'
import Presentation from './Prez'


const CvPage = () => {
    console.log("prez prez", PresentationData)
    return (
        <>
        <h1> Welcome on the CV page</h1>
        <Presentation prezData={PresentationData.jerome}/>
        <div className='cv-card-wrapper'>
<CvCard data={CvData} />
        </div>
        </>
    )
}
export default CvPage;
