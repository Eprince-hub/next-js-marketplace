import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#002B2B',
    height: 50,
    maxWidth: '100vw',
    '& a': {
      color: '#002B2B',
      marginRight: 10,
      fontSize: '1.2rem',
      color: '#FFFFFF',
    },
  },

  lowerNavigation: {
    width: '100%',
    height: '6.6rem',
    color: '#002B2B',
    position: 'fixed',
    left: 0,
    right: 0,
    transition: 'all 0.6s ease',
  },

  onScrollClassName: {
    background: '#002B2B',
    width: '100%',
    height: '6.6rem',

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    transition: 'all 0.6s ease-in-out',

    '& h2': {
      color: '#FFFFFF',
    },
  },

  navMenu: {
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#002B2B',

    '@media (max-width: 1230px)': {
      '& h2': {
        fontSize: '1rem',
      },
    },

    '@media (max-width: 870px)': {
      display: 'none',
    },
  },

  logo: {
    maxWidth: 260,
  },

  /*  searchBar: {
    '& input': {
    },
  }, */

  navbarButtons: {
    width: '40%',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#002B2B',

    '& a': {
      color: '#002B2B',
      fontFamily: 'Oswald',
    },
  },

  disableSwitch: {
    display: 'none',
  },

  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& a[href="/cart"]': { marginRight: 20 },

    '& a[href="/login"]': {
      background: '#77B050',
      marginBottom: 10,
      textAlign: 'center',
      borderRadius: 5,

      width: 108,
      height: 30,
    },

    '& a[href="/register-type"]': {
      background: '#77B050',
      marginBottom: 10,

      textAlign: 'center',
      borderRadius: 5,

      width: 108,
      height: 30,
    },
  },

  cartIcon: {
    width: 30,
  },

  profileIcon: {
    marginRight: 5,
  },

  lineUp: {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    marginBottom: 10,
    marginRight: 10,
  },

  heroPage: {
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(182, 242, 109, 0.3)',

    width: '100%',
    minHeight: '100vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroPageHeader: {
    color: '#002B2B',
    display: 'flex',
    flexDirection: 'column',
    justContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    width: '40rem',
    margin: '0 0 0 2rem',

    '& h1': {
      fontSize: '380%',

      /* fontSize: 'calc(50%  5rem)', */

      '@media (max-width: 870px)': {
        fontSize: '6vw',
      },
    },

    '& p': {
      marginBottom: '1rem',
      lineHeight: 1.8,
      textAlign: 'left',
      padding: '1rem',
      fontSize: '1rem',
      color: '#002B2B',
    },

    '& a': {
      color: '#FFC745 ',

      borderRadius: 16,
      padding: '0rem 1.8rem',
      background: '#002B2B',
    },

    '@media (max-width: 870px)': {
      maxWidth: '100%',
      margin: '0',
    },
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },

  section: {
    marginTop: 20,
    marginBottom: 20,
  },

  categorySection: {
    width: '100%',
    textAlign: 'center',
  },

  categorySectionHeader: {
    /* background: 'rgba(77, 115, 50, 0.2)', */
    backgroundColor: 'rgba(182, 242, 109, 1)',
    height: '100%',
    padding: '1rem 0rem',
    borderRadius: 5,

    '& h2': {
      color: 'rgba(0, 43, 43, 1)',
      LineHeight: 53.35,
      fontWeight: 500,
      fontSize: 36,
    },

    '& div': {
      height: 190,
    },
  },

  productPageHeader: {
    marginBottom: '1.2rem',
    fontWeight: 'bold',
    color: '#002B2B',
    fontSize: '2rem',
  },

  productDisplayContainer: {
    width: '80%',
    margin: '0 auto',
  },

  form: {
    width: '100%',
    /* textAlign: 'center', */
    maxWidth: 800,
    margin: '0 auto',
  },

  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },

  loginLayoutStyle: {
    backgroundColor: 'rgba(182, 242, 109, 0.3)',
  },

  loginPageStyle: {
    maxWidth: '60%',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    zIndex: 1,
    marginTop: '2rem',
    padding: '0 1rem',
    borderRadius: 40,
    margin: '0 auto',
    marginTop: '10%',
    filter: 'drop-shadow(0 0 0.75rem green)',

    '@media (max-width: 960px)': {
      height: '160vh',
      maxWidth: '90%',
      marginTop: '20%',
    },
  },

  loginGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginPageImage: {
    width: '100%',
    height: '100%',
    textAlign: 'right',
  },

  loginFormContainer: {
    width: '100%',
    height: '100%',

    '& form': {
      textAlign: 'center',
      width: '100%',
      height: '100%',
    },
  },

  loginFormTexts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& li': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  transparentBackground: {
    background: 'transparent',
  },

  error: {
    color: '#F04040',
  },

  fullWidth: {
    width: '100%',
  },

  siteAdminStyle: {
    '& h2': {
      textAlign: 'center',

      marginBottom: '-1.2rem',
    },
  },

  chooseRegistration: {
    height: '60vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',

    '& h2': {
      color: '#002B2B',
      fontSize: '2rem',
    },
  },

  centerAligned: {
    textAlign: 'center',
    fontSize: '2rem',
    marginTop: '3rem',
  },

  cartContinueShopping: {
    '& h1': {
      fontSize: '1.5rem',
      display: 'inline',
    },
  },

  footer: {
    padding: '1rem',
    marginTop: 60,
    color: '#FFFFFF',
    backgroundColor: '#002B2B',

    '& span p:last-of-type': {
      textAlign: 'center',
    },

    '& input': {
      borderRadius: 16,
      marginRight: 5,
      border: '2px solid white',
      height: '6px',
    },
  },

  footerSocialIcons: {
    paddingTop: '0.5rem',
    width: 200,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icons: {
    width: 20,
  },

  footerButton: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: '20px 0px',
  },

  mobileDisplayNav: {
    display: 'flex',
    right: 0,
    left: 0,
  },

  mobileLogo: {
    width: 260,
    margin: '0 auto',
    padding: '0.5rem 0 0 4rem',
    display: 'none',

    '@media (max-width: 870px)': {
      display: 'block',
    },
  },

  mobileSidebar: {
    display: 'none',

    '@media (max-width: 870px)': {
      display: 'block',
    },
  },

  hamburgerMenuContainer: {
    textAlign: 'right',
    margin: '0 0 0 auto',
    display: 'none',

    '& button': {
      width: '5px',
    },

    '@media (max-width: 870px)': {
      display: 'block',
    },
  },

  closeHamburgerMenuImage: {
    width: 60,
    marginLeft: 400,

    '& img': {
      borderRadius: 10,
      background: 'white',
    },
  },

  hamburgerMenuItem: {
    background: '#002B2B',
    color: 'white',
    width: '600px',
    height: '50px',

    '& p': {
      width: '100%',
      height: '100%',
    },

    '& p:hover': {
      fontWeight: 'bold',
      color: '#002B2B',
    },
  },

  infoPageStyles: {
    margin: '2rem 0',
    width: '100%',
  },

  infoPageGrids: {
    marginTop: '8rem',
    paddingTop: '8rem',
    textAlign: 'center',
    padding: ' 2rem 2rem',
    width: '90%',
    margin: '0 auto',
    borderTop: '2px solid #AEB3B9',

    '& div p:first-child:first-of-type': {
      fontWeight: 'bold',
      color: '#AEB3B9',
    },

    '& div h2:first-of-type': {
      display: 'inline-block',
      fontWeight: 'bold',
      borderBottom: '4px solid #01C790',
      paddingBottom: '2rem',
      marginBottom: '2rem',
    },
  },

  farmersInfo: {
    width: '60%',
    minHeight: '60vh',
    margin: '0 auto',
    textAlign: 'center',

    '@media (max-width: 870px)': {
      width: '80%',
    },
  },

  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },

  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },

  reviewsContainer: {
    marginTop: '2rem',
    maxWidth: '60%',
    margin: '0 auto',
  },

  alignItemsCenter: {
    textAlign: 'center',
    /* not working yet */
  },

  navbarButton: {
    color: '#002B2B',
    width: 40,
    height: 40,
  },

  navbarButtonOnScroll: {
    color: '#FFFFFF',
    width: 40,
    height: 40,
  },

  /*   menuButton: {
    padding: 0,
  }, */

  searchGridMt1: {
    marginTop: '1rem',
  },

  // search section
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  searchForm: {
    border: '1px solid #FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  searchInput: {
    paddingLeft: 5,
    color: '#000000',

    '& ::placeholder': {
      color: '#606060',
    },
  },

  iconButton: {
    backgroundColor: '#002B2B',
    padding: 5,
    borderRadius: '0 10px 10px 0',

    '& span': {
      color: '#FFFFFF',

      '& :hover': {
        color: '#000000',
      },
    },
  },

  sort: {
    marginRight: 5,
  },
}));
export default useStyles;
