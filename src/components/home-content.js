import * as React from "react"
import { makeStyles }  from '@material-ui/core/styles'
import featureImg1 from '../images/features-2.png'
import featureImg2 from '../images/features-3.png'
import featureImg3 from '../images/features-4.png'
import featureImg1b from '../images/slide/NeurobridgeScreen.png'
import featureImg2b from '../images/slide/Neurobridge_database.png'
import featureImg3b from '../images/slide/Neurobridge_Mining.png'
import {Card, CardHeader, CardMedia, CardContent} from '@material-ui/core/'

const content = [
    {
      title: 'NeuroBridge Search Portal',
      text: 'In the portal, the user will build flexible ontology-based searches and rank the returns by various criteria.',
      image: featureImg1
    },
    {
      title: 'NeuroBridge Mediator',
      text: 'Searches on meta-data provided by collaborating neuroimaging data sources by translating user queries into query languages of the source repositories.',
      image: featureImg2
    },
    {
      title: 'NeuroBridge Text Miner',
      text: 'The text miner utilizes machine learning techniques to mark-up full text journal articles with terms from the NeuroBridge ontologies, i.e., a signature representation of the article using ontology terms. The Search is based on matching between user-input terms to the representations.',
      image: featureImg3
    },
  ]
  

const useStyles = makeStyles({
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        // marginLeft: '50px'
      },
      card: {
        width: '350px',
        margin: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        filter: 'drop-shadow(16px 16px 10px rgba(0, 0, 0, 0.2));',
        borderRadius: '8px'
      },
      cardImg: {
        // padding: '60px',
        maxHeight: '300px'
      },
      cardContent: {
    
      },
      cardHeader: {
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: '400',
        letterSpacing: '.4px',
        background: 'linear-gradient(to bottom right, #f684b5, #fe9191)',
        padding: '20px 0px',
    
      },
    

})

const HomeContent = () => {
    const classes = useStyles()
      return (
        <div className={classes.contentContainer}>
        {content.map((item) => (
          <Card className={classes.card} key={item.title}>
            <div className={classes.cardHeader}>
              {item.title}
              
            </div>
            <CardMedia
              component='img'
              image={item.image}
              alt='feature image'
              className={classes.cardImg}
            />
            <CardContent className={classes.cardContent}>
              <p>{item.text}</p>
            </CardContent>
        </Card>
        ))}
      </div>
      )
  }

  export default HomeContent