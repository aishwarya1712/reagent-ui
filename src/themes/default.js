import { createTheme } from '@mui/material/styles';
import { purple, indigo, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[600],  // Deep, professional indigo as the primary color
    },
    secondary: {
      main: purple[400],  // Soft, elegant purple as the secondary accent
    },
    background: {
      default: '#f9f9fb',  // Very light grey background for a clean look
      paper: '#ffffff',  // Pure white for cards and sections
    },
    text: {
      primary: grey[900],  // Dark text for strong readability
      secondary: grey[700],  // Lighter grey for secondary text
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.08)',  // Subtle hover effect for interactivity
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,  // Modern font family inspired by FlowVoice
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: grey[900],  // Dark, bold headers
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: grey[900],
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: grey[800],  // Slightly lighter for sub-headings
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: grey[700],  // Lighter grey for body text
    },
    button: {
      fontWeight: 600,
      fontSize: '1rem',
      textTransform: 'none',  // Avoid uppercase buttons for modern elegance
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',  // Rounded, modern buttons
          padding: '10px 20px',  // Spacious buttons for a clean look
          background: 'linear-gradient(45deg, #7b1fa2 30%, #3f51b5 90%)',  // Gradient inspired by vibrant accents
          color: '#ffffff',
          boxShadow: '0 3px 5px 2px rgba(63, 81, 181, 0.3)',  // Subtle shadow to add depth
          ':hover': {
            boxShadow: '0 5px 7px 2px rgba(63, 81, 181, 0.4)',  // Stronger shadow on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: indigo[600],  // Primary color for the AppBar
          boxShadow: 'none',  // Clean, flat design for the AppBar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',  // Large rounded corners for modern feel
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow for depth
          padding: '20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
        //   borderRadius: '16px',  // Subtle rounding for sections
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',  // Light shadow for modern elegance
        },
      },
    },
  },
});

export default theme;
