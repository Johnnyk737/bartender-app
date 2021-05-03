import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLinks } from './navigation/NavLinks';
import Grid from '@material-ui/core/Grid';

// import '../styles/footer.less'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     fontfamily: theme.typography.fontFamily
//   },
//   // typography: theme.typography
// }))

export const Footer = () => {
  const theme = useTheme();
  // const classes = useStyles(theme);
  console.log(theme)
    return (
      <>
        <footer className="position-relative z-index-10 d-print-none">
          <div className="py-6 bg-gray-200">
            <Container>

              <Grid container className="row"spacing={4}>
                <Grid item className="col-lg-2 col-md-3 mb-5 mb-lg-0">
                  <Typography variant="h6" className="font-weight-bold text-uppercase text-dark mb-3">
                    Directory
                  </Typography>
                  <Typography component="p">
                    Facebook, Instagram
                  </Typography>
                </Grid>
                <Grid item className="col-md-3 mb-5 mb-lg-0">
                  <Typography variant="h6">
                    Links
                  </Typography>
                  <NavLinks direction="vertical" />
                </Grid>
                <Grid item className="col-lg-6 col-md-6 mb-5 mb-lg-0"></Grid>
              </Grid>
            </Container>
          </div>
          <div className="py-4 font-weight-light bg-gray-800">
            <Container>
              <Grid container direction="row" className="align-items-center">
                <Grid container direction="column" className="text-md-left text-center col-md-6">
                  <Typography component="p">
                    {/* TODO: link to portfolio, add contact info */}
                    contact, copyright, developed by John Kroll, link to portfolio
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
        </footer>
      </>
    )
}
