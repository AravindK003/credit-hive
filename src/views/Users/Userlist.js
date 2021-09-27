import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from "prop-types";

function UserList(props) {
  
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        actions={[
            {
              icon: 'edit',
              tooltip: 'Edit User',
              onClick: (event, rowData) => {
                console.log(event,rowData);
                props.handleEdit(1)
              }
            },
            {
                icon: 'delete',
                tooltip: 'delete user',
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
          title="Users"
        />
      </div>
    )
  
}

UserList.propTypes = {
    handleEdit: PropTypes.function,
  };


export default UserList;