import React from 'react'
import Container from '../component/layers/Container'
import Link from 'next/link';

const page = async () => {
    let blob = await fetch("https://akashapi.vercel.app/read");
    let response = await blob.json();
    let messege = response.messege;
    messege.reverse()
    console.log(messege);

    return (
        <Container className='mt-10'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Client Messeges...
                        {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Messeges
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messege.map((meg) => (
                                <tr key={meg._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {meg.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {meg.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {meg.messege}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link href={`messeges/${meg._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    )
}

export default page

