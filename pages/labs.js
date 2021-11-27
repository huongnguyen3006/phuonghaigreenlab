import { useState, useEffect } from "react";
import Link from 'next/link'


export default function Labs() {

    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [friendlyName, setFriendlyName] = useState('')
    const [description, setDescription] = useState('')
    const [model, setModel] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [type, setType] = useState('')
    const [isActive, setIsActive] = useState('')
    const endPoint = "http://127.0.0.1:4000/Labs"


    useEffect(() => {
       fetch('http://127.0.0.1:4000/Labs',{
          headers: {'Content-Type': 'application/json',
                    'Authorization': 'Basic Ym9AZ21haWwuY29tOjEyMzEyMw=='
       }
    })
         .then (res => res.json())
         .then (data => setData(data))
        }, [])


    return (
        <div>
            <h1>Lab Controller</h1>
            <input type="hidden" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
            <div>
                <label>Description:</label>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div >
                <label>FriendlyName:</label>
                <input type="text" className="form-control" value={friendlyName} onChange={(e) => setFriendlyName(e.target.value)} />
            </div>
           
            <div >
                <label>Model:</label>
                <input type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)} />
            </div>
            <div >
                <label>SerialNumber:</label>
                <input type="text" className="form-control" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div >
                <label>IsActive:</label>
                <select>
                    <option> true</option>
                    <option>false</option>
                </select>
                 </div>
            <button  onClick={() => save()}>Save</button>

            <button  onClick={() => addnew()}>Add new</button>
            <table>
                <thead>
                    <tr> 
                        <td> Description</td>
                        <td> FriendlyName</td>
                        <td>Model</td>
                        <td> Serial Number</td>
                        <td> Type</td>
                        <td> IsActive</td>
                    </tr>
                </thead>

                <tbody>
                {data.map(e => {
                        return (
                            <>
                                <tr>
                                    <td> {e.FriendlyName}</td>
                                    <td> {e.Description}</td>
                                    <td> {e.Model}</td>
                                    <td> {e.SerialNumber}</td>
                                    <td> {e.Type}</td>
                                    <td> {e.IsActive}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => deleteRule(e._id)}>Delete</button>
                                        <button className="btn btn-warning" onClick={() => editRule(e.FriendlyName, e.Description, e.Model, e.SerialNumber, e.Type, e.IsActive)}>Edit</button>
                                    </td>
                                </tr>
                                {/* <Link href={`/wpa/${e.id}`}>{e.title}</Link> */}
                            </>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

// export async function getStaticProps() {
//     const res = await fetch('http://127.0.0.1:4000/Labs')
   
//     const labs = await res.json()
//     return {
//         props: {
//             labs,
//         },
//     }
// }