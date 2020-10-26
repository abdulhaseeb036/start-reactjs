import React from 'react';
import './App.css';
import { Box, Typography, Container, Button, Paper, Icon, TextField, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';

class App extends React.Component {
  render() {
    return (
      <Box className="reactdiv">
        <Box className="mainwrapper">
          <Box className="wrapper">
            <Grid container direction="row">
              <Grid component={Box} item xs={3} sm={3} md={3} lg={4} xl={4}>
                <Grid container direction="row">
                  <Grid component={Box} className="smallblutic" item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography className="bluetac" component={Box} textAlign="left" variant="subtitle2">BlueTac</Typography>
                  </Grid>
                  <Grid container direction="row">
                    <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <List height={17} component={Box}>
                        <ListItem>
                          <Icon className="icon">library_add</Icon>
                          <Typography className="listtypeo" className="listtypeo">Personel Infos</Typography>
                        </ListItem>
                      </List>
                      <List height={13} component={Box}>
                        <ListItem>
                          <Icon className="icon">library_add</Icon>
                          <Typography variant="subtitle1" className="listtypeo">Certifications</Typography>
                        </ListItem>
                      </List>
                      <List height={13} component={Box}>
                        <ListItem>
                          <Icon className="icon" component={Box}>library_add</Icon>
                          <Typography variant="subtitle1" className="listtypeo">Employment</Typography>

                        </ListItem>
                      </List>
                      <List height={13} component={Box} lineHeight={1} py={0} my={0}>
                        <ListItem>
                          <Icon className="icon">library_add</Icon>
                          <Typography variant="subtitle1" className="listtypeo">Education</Typography>
                        </ListItem>
                      </List>
                      <List>
                        <ListItem>
                          <Icon className="icon">library_add</Icon>
                          <Typography variant="subtitle1" className="listtypeo">Language</Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid className="biggest" component={Box} item xs={9} sm={9} md={9} lg={7} xl={7}>
                <Grid container direction="row" width={100}>
                  <Grid className="bigdivdash" component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container direction="row">
                      <Grid component={Box} item xs={6} sm={6} md={6} lg={9} xl={9}>
                        <Typography component={Box} textAlign="left" variant="subtitle1">Dashboard | Cases</Typography>
                      </Grid>
                      <Grid component={Box} item xs={3} sm={3} md={3} lg={2} xl={2}>
                        <Typography component={Box} textAlign="left" variant="subtitle2">john@company.com</Typography>
                      </Grid>
                      <Grid px={3} component={Box} item xs={3} sm={3} md={3} lg={1} xl={1}>
                        <Icon className="person">person</Icon>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className="bigbox" component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Container>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Typography component={Box} textAlign="left" py={2} variant="h5">Employment</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Typography component={Box} textAlign="left" variant="subtitle2">Add Your Past Work Experience</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Typography py={2} component={Box} textAlign="left" variant="body2">Build your cretibility by showcasing the projects or job you have complete.</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Paper component={Box} width={170}>
                            <Button startIcon={<AddCircleOutlineIcon className="addempicon" />} className="addemploybtn">Add Employment</Button>
                          </Paper>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="subtitle2">Title | Company</Typography>
                        </Grid>
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="subtitle2">Duration</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="body">Softwere Engineering | BlueTac</Typography>
                        </Grid>
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="body">May 2005 - May 2007</Typography>
                        </Grid>
                        <Grid component={Box} item xs={2} sm={2} md={2} lg={2} xl={2}>
                          <DeleteIcon className="deleteicon" />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="body">Softwere Engineering | 99xtec</Typography>
                        </Grid>
                        <Grid component={Box} item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Typography py={2} component={Box} textAlign="left" variant="body">27 Sept - Now</Typography>
                        </Grid>
                        <Grid component={Box} item xs={2} sm={2} md={2} lg={2} xl={2}>
                          <DeleteIcon className="deleteicon" />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid component={Box} item xs={10} sm={10} md={10} lg={10} xl={10}>
                          <Link className="linkskip" variant="subtitle1" component={Box} textAlign="left" href="#">
                            Skip this step for now
                          </Link>
                        </Grid>
                        <Grid component={Box} item xs={2} sm={2} md={2} lg={2} xl={2}>
                          <Button className="nextbtn">Next</Button>
                        </Grid>
                      </Grid>
                    </Container>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>     
          <Grid container direction="row" component={Box} my={7}>
            <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container direction="row" component={Box}>
            <Grid component={Box} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="body1" component={Box} textAlign="left">@ 2020 BlueTac.</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }
}

export default App;
