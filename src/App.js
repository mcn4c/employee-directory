// import './App.css';

import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table"

function App() {
  
   
    const columns = useMemo(
      () => [
        {
          Header: "Image",
          accessor: "employee.picture.thumbnail"
        },
        {
          Header: "Name",
          accessor: "employee.name"
        },
        {
          Header: "Age",
          accessor: "employee.age"
        },
        {
          Header: "Contact",
          accessor: "employee.email"
        },
        {
          Header: "Location",
          accessor: "employee.location.city"
        },
      ]
    );
    return (
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    );
  }

  //*************For Cell Styling**************** */
  //Place above App()
  // Custom component to render Genres 
//const Genres = ({ values }) => {
  // Loop through the array and create a badge-like component instead of a comma-separated string
  // return (
  //   <>
  //     {values.map((genre, idx) => {
  //       return (
  //         <span key={idx} className="badge">
  //           {genre}
  //         </span>
  //       );
  //     })}
  //   </>
  // );
// };

         // Cell method will provide the cell value; we pass it to render a custom component 
         // place this in useMemo array
         //Cell: ({ cell: { value } }) => <Genres values={value} />
    



export default App;
