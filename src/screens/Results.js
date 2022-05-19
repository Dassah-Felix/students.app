import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


function Results() {
return (
  <>
      <Header />
   
	<div className="app">
  <MySidebar />
  <div className="content">
	<table>
    <tr>
    <th>Name: Prosper Kuubeyir</th>
    </tr>
    <tr>
		<th>Program: General Science</th>
    </tr>
 
		<tr>
		<th>Subject</th>
    <th>Marks</th>
    <th>Grade</th>
		</tr>
    
		<tr>
    <td>Mathematics</td>
		<td>75%</td>
    <td>B2</td>
		</tr>
		<tr>
    <td>English Language</td>
		<td>80%</td>
    <td>A1</td>
		</tr>
		<tr>
    <td>Science</td>
		<td>85%</td>
    <td>A1</td>
		</tr>
	</table>

  </div>
  
	</div>
  
  </>
);
}

export default Results;
