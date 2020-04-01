import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    grid: {
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: "flex",
        direction: "row"
      },
    margin: {
        margin: theme.spacing(1),
    },
}
));

export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} alignContent="center">
            {/* <div> */}
                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    Small
                </Button>
                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    Medium
                </Button>
            {/* </div> */}
        </Grid>
    )
};