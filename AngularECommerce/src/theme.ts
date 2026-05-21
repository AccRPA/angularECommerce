import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyTheme = definePreset(Aura, {
    semantic: {
        primary: {
            500: '#003591', // Main button color
            600: '#0f204b', // Hover color
            700: '#0C1A3D'  // Active/Pressed color
        }
    },
    components: {
        button: {            
            root: {
                borderRadius: '10px',
                paddingX: '1.143rem',
                paddingY: '0.571rem'
            }
        }
    }
});

export default MyTheme;