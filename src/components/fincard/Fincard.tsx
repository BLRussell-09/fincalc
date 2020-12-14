import * as React from 'react';
import './Fincard.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

const Fincard = () => {
  return (
    <div className="finCard">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item xs={3}>
          <Card className="booger">
            <Grid item justify="flex-start" xs={12}>
              <CardContent>
                <Typography variant="h5" gutterBottom>IRA Distribution Calculator</Typography>
                <TextField id="standard-basic" label="Desired Net Withholdings"/>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Fincard
