import * as React from "react"
import { useTheme } from '@mui/material/styles'
import { Box, Typography } from "@mui/material"

const Footer = () => {
    const theme = useTheme()
    const styles = {
        root: {
            backgroundColor: theme.palette.grey.A700,
            padding: '30px 0 30px 0',
            color: theme.palette.primary.contrastText,
            // fontSize: '14px',
        },
        copyright: {
            textAlign: 'center',
        }
    }
    
    return (
        <footer>
            <Box sx={styles.root}>
                <Typography sx={styles.copyright}>
                    &copy; Copyright <strong><span>NeuroBridge</span></strong>. All Rights Reserved 2021
                </Typography>
            </Box>
        </footer>
    )
}


export default Footer
