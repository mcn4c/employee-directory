import React from 'react';

function Table(props) {
	return (
		<table>
			{props.results.map((result) => (
				<tr>
					<td className="employee-cell image">
						<img alt={result.name.last} className="img-fluid" src={result.picture.medium} />
					</td>

					<td className="employee-cell last-name">{result.name.last}</td>

					<td className="employee-cell first-name">{result.name.first}</td>

					<td className="employee-cell age">{result.dob.age}</td>

					<td className="employee-cell contact">{result.email}</td>

					<td className="employee-cell location">
						{result.location.city}, {result.location.state}, {result.location.country}
					</td>
				</tr>
			))}
		</table>
	);
}
export default Table;
