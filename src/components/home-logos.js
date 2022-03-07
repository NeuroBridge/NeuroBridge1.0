import * as React from "react"
/* eslint-disable no-unused-vars */
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link as GatsbyLink } from "gatsby"
import ohioState from '../images/clients/osu-wmc.png'
import USC from '../images/clients/usc-ISI.png'
import UNCCH from '../images/clients/UNC.png'
import WashingtonUSL from '../images/clients/WUSTL_Medicine.png'
import georgiaState from '../images/clients/GSU.png'
import caseWestern from '../images/clients/CWRU.jpeg'
import { Box } from "@mui/material"

const clients= [
    {
      name: 'The Ohio State University Wexner Medical Center',
      link: 'https://medicine.osu.edu/find-faculty/clinical/psychiatry-and-behavioral-health/lei-wang-phd',
      image: ohioState
    },
    {
      name: 'University of Southern California Information Sciences Institute',
      link: 'https://www.isi.edu/',
      image: USC
    },
    {
      name: 'University of North Carolina at Chapel Hill',
      link: 'https://www.unc.edu',
      image: UNCCH
    },
    {
      name: 'Washington University in St. Louis School of Medicine',
      link: 'https://medicine.wustl.edu/',
      image: WashingtonUSL
    },
    {
      name: 'Georgia State University',
      link: 'https://research.gsu.edu/georgia-state-university-research-centers-and-institutes/',
      image: georgiaState
    },
    {
      name: 'Case Western Reserve University',
      link: 'https://case.edu/cwruresearch/',
      image: caseWestern
    },
]
  

const HomeLogos = () => {
  const styles = {
    clients: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    image: {
        padding: '20px',
        width: '180px',
        filter: 'opacity(.5) saturate(.5)',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
          filter: 'opacity(1) saturate(1)',
          transform: 'scale(1.15)'

        }
    }

}

    return (
      <Box sx={styles.clients}>
            {clients.map((client)=> (
                <GatsbyLink href={client.link} target='_blank' key={client.name}>
                    <Box
                        component='img'
                        src={client.image}
                        alt={client.name}
                        sx={styles.image}
                    />  
                </GatsbyLink>
            ))}
      </Box>
    )
}
export default HomeLogos