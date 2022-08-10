import Button from '@mui/material/Button';

import { btnStyles } from './CustomButtonStyles';





export const CustomButton = ({variant, startIcon, sx, children})=>{
   

   

    return <Button variant={variant} startIcon={startIcon} sx={{...sx, ...btnStyles}}>{children}</Button>
}