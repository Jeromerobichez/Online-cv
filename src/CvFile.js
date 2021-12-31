import react from 'react'
import './App.css';
import CvCard from './CvCard';
import { CvData, PresentationData } from './data.js'

const CvFile = ({ data }) => {
    return (
        <>
            <div className="cv-page">
                <div className="cv-col-1">
                    <img
                        className="photo-id"
                        src='src/images/jerome-id.jpg'
                        alt="jerome-robichez-photo"
                        title='jerome robichez photo' />

                    <div className='text-left'>
                        <div className='text-left'>Jérôme Robichez</div>
                        <div className='d-block'>09/07/1987</div>
                        <div>33000 BORDEAUX</div>
                        <div>+33 6 86 44 45 41</div>
                        <div>jerome.robichez@gmail.com</div>
                        <div className='cv-category'>Langues</div>
                        <div>Anglais Courant</div>
                        <div>Espagnol Moyen</div>
                        <div className='cv-category'>À propos</div>
                        <div>
                            Après 5 mois de formation intensive à la Wild Code School et un stage de 8 mois chez charles.co je suis à présent à la recherche d’un CDI à Bordeaux ou en télétravail.
                        </div>
                        <div className='cv-category'>Compétences :</div>
                        <div className='mini-title'>professionnelles: </div>
                            <div>
                              <div className='d-flex flex-row'>  <span>HTML / CSS</span><div className='d-flex flex-row'><div className='square-1 '></div ><div className='square-1 '></div><div className='square-1 '></div><div className='square-1 '></div><div className='square-2 '></div></div></div>
                              <div>   <span>Javascript</span><span>*</span><span>*</span></div>
                              <div>    <span>React JS</span><span>*</span><span>*</span></div>
                              <div>    <span>Node.js</span><span>*</span><span>*</span></div>
                              <div>   <span>MySQL</span><span>*</span><span>*</span></div>
                           
                        </div>
                        <div className='mini-title'>Personelles :</div>
                        <div>  <span>Communication</span><span> * </span><span>*</span></div>
                        <div>  <span> Esprit d'équipe</span><span>*</span><span>*</span></div>
                        <div>  <span> Organisation</span><span>*</span><span>*</span></div>
                        <div>  <span> Sociabilité</span><span>*</span><span>*</span></div>
                        <div>  <span> Autonomie</span><span>*</span><span>*</span></div>
                    </div>
                </div>
                <div className="cv-col-2">
                    <h1 className="cv-h1">Jérôme Robichez</h1>
                    <h2>Developpeur Web (JS, React, Node.js)
                        A la recherche d’un poste de développeur web.
                    </h2>
                    <div className='cv-category'>Experience</div>
                    <CvCard data={CvData} />
                </div>
            </div>
        </>
    )
}
export default CvFile;
