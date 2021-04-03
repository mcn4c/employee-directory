import React, { useState, useEffect, useMemo } from 'react';
import Table from './components/Table';
import axios from 'axios';
import employee from "./employee.json"

function App() {

	const data = employee;

	
	const columns = useMemo(() => [
	
		{
			Header: "Employee",

			columns: [

		{
			Header: 'Image',
			accessor: 'picture.thumbnail'
		},
		{
			Header: 'Name',
			accessor: [ 'employee.name.last', 'name.first' ]
		},
	],
},
		{ 
			Header: "Details",
		
		columns: [
			{
			Header: 'Age',
			accessor: 'dob.age'
		},
		{
			Header: 'Contact',
			accessor: 'email'
		},
		{
			Header: 'Location',
			accessor: 'location.city'
		}
	]
}
],
[]
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
