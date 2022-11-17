import React from 'react'
import './Table.css'

const Table = (props) => {

    return (
        <table className='taskTable'>
            <thead>
                <tr>
                    {props.alltask.Header.map((head, i) => {
                        return (
                            <th className='taskTh' key={i}>{head}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    props.alltask.Data.map((data, i) => {

                        return (
                            <tr key={i}>{props.alltask.Header.map((head, j) => {

                                const formattedHeader = head.split('_').join('');

                                if (formattedHeader == 'Images') {

                                    return (<td className='taskTd' key={j}>{data[formattedHeader].map((img, i) => (<img className='taskImg' src={img} key={i} />))}</td>)

                                }

                                else if (formattedHeader == 'Videos') {

                                    return (<td className='taskTd' key={j}><video><source src={data[formattedHeader]} /></video></td>)

                                }

                                else {

                                    return (<td className='taskTd' key={j}>{data[formattedHeader] = !data[formattedHeader] ? 'NA' : data[formattedHeader]} </td>)

                                }

                            })}</tr>)
                    })
                }
            </tbody>
        </table>
    )
}

export default Table