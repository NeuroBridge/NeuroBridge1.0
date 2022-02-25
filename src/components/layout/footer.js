import * as React from "react"
import { makeStyles }  from '@mui/styles'
import { useTheme } from '@mui/material/styles'



const Footer = () => {
    const theme = useTheme()
    const styles = {
        root: {
            backgroundColor: '#4a5562',
            padding: '30px 0 30px 0',
            color: theme.palette.error.main,
            fontSize: '14px',
        },
        copyright: {
            textAlign: 'center',
            paddingTop: '30px',
        }
        
    }
    
    return (
        <footer>
            <div sx={styles.root}>
                <div sx={styles.copyright}>
                    &copy; Copyright <strong><span>NeuroBridge</span></strong>. All Rights Reserved 2021
                </div>
            </div>
        </footer>
    )
}


export default Footer
