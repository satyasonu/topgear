import React from 'react'
import { students } from './Main'

const Details = () => {   
  return (
    <>
    {students.map(student => (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
        </tr>
    ))}
    </>
  )
  }
export default Details;