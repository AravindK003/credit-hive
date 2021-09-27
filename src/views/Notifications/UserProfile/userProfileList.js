import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from "prop-types";
import { Button ,Box } from '@material-ui/core';

function UserProfileList(props) {
  
    return (
      <div style={{ maxWidth: '100%' }}>
            <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
      <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add UserProfile</Button></Box>
        <MaterialTable
        actions={[
            {
              icon: 'edit',
              tooltip: 'Edit UserProfile',
              onClick: (event, rowData) => {
                console.log(event,rowData);
                props.handleEdit(1)
              }
            },
            {
                icon: 'delete',
                tooltip: 'delete UserProfile',
                onClick: (event, rowData) => {
                  console.log(event,rowData);
                }
              }
          ]}
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Email Address', field: 'surname' },
            { title: 'First Name', field: 'birthYear' },
            { title: 'Last Name', field: 'birthYear' },
            { title: 'Staff Status', field: 'birthYear' },

          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="UserProfile"
        />
      </div>
    )
  
}

UserProfileList.propTypes = {
    handleEdit: PropTypes.function,
  };


export default UserProfileList;