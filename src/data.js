class CvSchema {
    constructor(form, xp, tech) {
        this.formation = form;
        this.experience = xp;
        this. technologies = tech;

    }
}
class cvFormation {
    constructor(date, inst, title) {
        this.date= date;
        this.institut= inst;
        this.titre= title;
    }
}
const formationJ = new cvFormation("2007-2010", "Faco Paris", "licence de droit")
const cvJerome = new CvSchema(formationJ, "charles.co", "ReactJS, Node.JS")

const CvData = {
    formation: [
        {
            date: '2007-2010',
            institut: 'Faco Paris',
            titre: 'Licence de droit',
            logoInstitut: '',
           
        },
        {
            date: 'nov 2020 - avril 2021',
            institut: 'Wild Code School',
            titre: 'Développeur Web',
            logoInstitut: '',
           

        }
    ],
    expériences: [
        {
            date: 'nov 2020 - avril 2021',
            société: '2007-2010',
            poste: 'Faco Paris',
            misions: [],
           
        },
    ],
    technologies: [
        {name: 'React',
    niveau: 3},
    {
        name: 'HTML',
        niveau: 3,
    },
    {
        name: 'CSS',
        niveau: 3,
    },
    {
        name: 'Node.JS',
        niveau: 2,
    },
    {
        name: 'MySQL',
        niveau: 1,
    },
    {
        name: '',
        niveau: 1,
    },
    ]

}

const PresentationData = {
    jerome: [
        {FirstName: 'Jérôme',
    LastName: 'Robichez',
qualite: 'développeur web ',
spé: 'JS, React & Node.Js',
message: 'À la recherche d\'un poste de développeur Web',
img: 'src/images/jerome-id.jpg',
alt: 'photo-de-jerome',
title: 'photo de jerome'}

    ],
    chubaka: [
        {FirstName: 'chewi',
    LastName: 'baka',
qualite: 'casseur flowter',
spé: 'manucure, épilation (laser)',
message: 'À la recherche d\'un poste d\estéticien'}
    ]

}
 export {CvData, PresentationData, cvJerome} ;
