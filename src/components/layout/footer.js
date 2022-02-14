import * as React from "react"
import { makeStyles }  from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#4a5562',
        padding: '30px 0 30px 0',
        color: '#fff',
        fontSize: '14px',
    },
    copyright: {
        textAlign: 'center',
        paddingTop: '30px',
    }
    
}))


const Footer = () => {
    const classes = useStyles()

    return (
        <footer>
            <div className={classes.root}>
                <div className={classes.copyright}>
                    &copy; Copyright <strong><span>NeuroBridge</span></strong>. All Rights Reserved 2021
                </div>
            </div>
        </footer>
    )
}


export default Footer
