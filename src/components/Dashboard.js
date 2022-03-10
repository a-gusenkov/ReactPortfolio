
import '../App.css';
import Tables from '../components/Tables';
import { Grid } from '@mui/material';
import logos from './todo.png'

function Dashboard() {
  return (
    <div className='Dashboard'>
            <img src={logos} alt="Logo" id="logo"/>
      <Grid container spacing={0} id="entire-table" >
        <Grid item xs={2} id="panel" >
        <p id="info-head">How to Use To-Do</p>
          <div id="info">
          
          <p className='info-subHead'>Adding a To-Do</p>
          <p>Click on the "Add To-Do +"" Button and put in a title and date for your To-Do. Once added change the completeness and priority color.</p>
          <p className='info-subHead'>Editing a To-Do</p>
          <p>Once a To-Do is added press the Edit/Delete Button. To edit change your information and click "Save To-Do." </p>
          <p className='info-subHead'>Deleting a To-Do</p>
          <p>Once a To-Do is added press the Edit/Delete Button. To delete click "Delete To-Do." </p>
          <p className='info-subHead'>Other Features</p>
          <p>Search for a specific To-Do with the search bar on the top right.</p>
          <p>When you click for compeltion you will get an alert.</p>
  
          <br/>
          
          </div>
          
        </Grid>
        <Grid item xs={10} id="data-tbl">
          <Tables/>
        </Grid>

      </Grid>
    </div>
  );
}

export default Dashboard;