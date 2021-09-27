import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from "prop-types";

function SchemaList(props) {
  
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Schema',
              onClick: (event, rowData) => {
                console.log(event,rowData);
                props.handleEdit(1)
              }
            },
            {
                icon: 'delete',
                tooltip: 'delete Schema',
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
          title="Schemas"
        />
      </div>
    )
  
}

SchemaList.propTypes = {
    handleEdit: PropTypes.function,
  };


export default SchemaList;