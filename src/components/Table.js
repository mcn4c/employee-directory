import React from 'react';

function Table(props) {
	return (
		<table>
			{props.results.map((result) => (
				<tr>
					<td className="employee-cell image" key={result.id}>
						<img alt={result.name.last} className="img-fluid" src={result.picture.medium} />
					</td>

					<td className="employee-cell last-name" key={result.id}>
						{result.name.last}
					</td>

					<td className="employee-cell first-name" key={result.id}>
						{result.name.first}
					</td>

					<td className="employee-cell age" key={result.id}>
						{result.dob.age}
					</td>

					<td className="employee-cell contact" key={result.id}>
						{result.email}
					</td>

					<td className="employee-cell location" key={result.id}>
						{result.location.city}, {result.location.state}
					</td>
				</tr>
			))}
		</table>
	);
}
export default Table;
