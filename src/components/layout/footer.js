import * as React from "react"
  
import { useTheme } from '@mui/material/styles'
import { Box } from "@mui/material"



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
            <Box sx={styles.root}>
                <Box sx={styles.copyright}>
                    &copy; Copyright <strong><span>NeuroBridge</span></strong>. All Rights Reserved 2021
                </Box>
            </Box>
        </footer>
    )
}


export default Footer
