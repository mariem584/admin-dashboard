import * as React from 'react';
import { useState } from 'react';
import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../dataTableInfo';
import { Link } from 'react-router-dom';
export default function DataTable() {
  const [data, setdata] = useState(userRows)
  const HandleDelete= (id) =>{
    setdata(data.filter((item)=> item.id !== id))
  }

    const actionCol =[
       { field :'action', headerName:'Action' , width :200 ,renderCell:(params)=>{
        return(
            <div className='cellAction'>
          <Link to='/users/test' style={{textDecoration:"none"}}>

                <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton" onClick={()=>HandleDelete(params.row.id)}>Delete</div>

            </div>
        )
       }}
    ]
  return (
    <div className='dataTable' style={{ height: 400 }}>
      <div className="datatableTitle">
        Add New User
    
        <Link to='/users/new' style={{textDecoration:"none"}} className='link'>
          Add New
      </Link>
      </div>
      <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionCol)}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
}
