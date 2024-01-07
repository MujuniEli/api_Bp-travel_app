import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";
import  Rating  from "@material-ui/lab";

import useStyles from './style'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = {Lat:0, Lng: 0};
    
    return (
                <div className={classes.mapContainer}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key:'AIzaSyBHE0v9sUrDzjTGv6aqincgJu0g3S1Ebh4'}}
                        defaultCenter={coordinates}
                        center={coordinates}
                        defaultZoom={14}
                        margin={[50, 50, 50, 50]}
                        options={''}
                        onChange={''}
                        onChildClick={''}
                    >

                    </GoogleMapReact>
                </div>
    )
}

export default Map;