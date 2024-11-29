"use client"
import Link from 'next/link'
import React from 'react'
import axios from 'axios'

const DataDelete = ({ id }) => {
    let deleteData = () => {
        console.log(id);
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <td className="px-6 py-4 text-right">
            <button onClick={deleteData} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
    )
}

export default DataDelete