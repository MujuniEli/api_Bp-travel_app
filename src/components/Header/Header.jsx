import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style'

const Header = () => {
    const classes = useStyles();
    return (
                <AppBar position="static" style={{ background: '#4c97d0' }}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5" className={classes.title}>
                            Travel Info
                        </Typography>
                        <Box display="flex">
                            <Typography variant="h6" className={classes.title}>
                                Explore different locations!
                            </Typography>
                                {/* <Autocomplete> */}
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                        <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} />
                                    </div>
                                {/* </Autocomplete> */}
                        </Box>
                    </Toolbar>
                </AppBar>
    )
}

export default Header;