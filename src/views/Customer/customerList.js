import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from "prop-types";
import { Button ,Box } from '@material-ui/core';

function CustomerList(props) {
    return (
      <div style={{ maxWidth: '100%' }}>
         <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
          <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add Customer</Button></Box>
        <MaterialTable
        actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Customer',
              onClick: (event, rowData) => {
                console.log(event,rowData);
                props.handleEdit(1)
              }
            },
            {
                icon: 'delete',
                tooltip: 'delete Customer',
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
          title="Customer"
        />
      </div>
    )
  
}

CustomerList.propTypes = {
    handleEdit: PropTypes.function,
  };


export default CustomerList;