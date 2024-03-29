import React from 'react'
import { Box,Typography, useTheme} from "@mui/material";
import { tokens } from '../theme';
import { color } from '@mui/system';
import ProgressCircle from './ProgressCircle';

type StatBoxProps = {
    title: string;
    subtitle: string;
    icon: object;
    progress?: number;
    increase: string;
}

const StatBox = ({ title, subtitle, icon, progress, increase}:StatBoxProps) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width="100%"
            m="0 30px"
        >
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <>
                    {icon}
                    <Typography 
                    variant='h4' 
                    fontWeight="bold"
                    sx={{color: colors.grey[100]}}>
                    {title}
                    </Typography>
                    </>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <>
                    <Typography 
                        variant='h5' 
                        fontWeight="bold"
                        sx={{color: colors.greenAccent[500]}}>
                        {subtitle}
                    </Typography>
                    {icon}
                    <Typography 
                        variant='h5' 
                        fontStyle="italic"
                        sx={{color: colors.greenAccent[600]}}>
                        {increase}
                    </Typography>
                    </>
                </Box>
            </Box>



        </Box>

    )


}
export default StatBox;