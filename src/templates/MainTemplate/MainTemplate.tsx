import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import AppBar from 'components/common/AppBar'
import AppMenu from 'components/common/AppMenu'


export type MainTemplateProps = {
}

export default function MainTemplate({ } : MainTemplateProps): JSX.Element {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar />
          <Grid container columns={24}>
            <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
              <AppMenu />
            </Grid>
            <Grid item xs={24} lg={20}>
                <Grid item lg={24}>
                    <Outlet />
                </Grid>
            </Grid>
        </Grid>
       </Box>
    )
}