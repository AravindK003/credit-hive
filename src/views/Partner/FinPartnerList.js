import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from "prop-types";
import { Button, Box } from '@material-ui/core';

function FinPartnerList(props) {
  
    return (
      <div style={{ maxWidth: '100%' }}>
          <Box p={0} style={{justifyContent:'flex-end',textAlign:'right'}}>
            <Button variant="outlined" color="primary" onClick={()=>{props.handleEdit()}}>Add FinPartner</Button></Box>
        <MaterialTable
        actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Fin Partner',
              onClick: (event, rowData) => {
                console.log(event,rowData);
                props.handleEdit(1)
              }
            },
            {
                icon: 'delete',
                tooltip: 'delete Fin Partner',
                onClick: (event, rowData) => {
                  console.log(event,rowData);
                }
              }
          ]}
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'IS ACTIVE', field: 'surname' },
            { title: 'SUGGESTED BY', field: 'birthYear' },
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Fin Partner"
        />
      </div>
    )
  
}

FinPartnerList.propTypes = {
    handleEdit: PropTypes.function,
  };


export default FinPartnerList;