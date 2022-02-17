import React from "react"
import { Autocomplete } from "@react-google-maps/api";
import {AppBar, Toolbar, Topography, InputBase, Box} from "@materilal-ui/core";
import SearchIcon from "@material-ui/icons/Search"

import useStyles from "./styles"

const Header = () => {
    const classes =  useStyles();
    return(
        <AppBar postiton="static">
          <Toolbar className={classes.toolbar}>
              <Topography variant="h5" className={classes.title}>
                  Travel Advisor

              </Topography>
              <Box display="flex">
              <Topography variant="h6" className={classes.title}>
                  Explore new places

              </Topography>
              {/* <Autocomplete> */}
                  <div className={classes.search}>
                      <div
                      className={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input:classes.inputInput}}>
                      </InputBase>
                  </div>
              {/* </Autocomplete> */}
              </Box>
        </Toolbar>  
        </AppBar>
    );
};
export default Header;