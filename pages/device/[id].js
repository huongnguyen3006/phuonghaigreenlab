export default function Device({device}){
    return(
        <div>
        <h1> Device Details</h1>
        
           
            <l1> {device.Id}, {device.Type} </l1>
            </div>

    )
}

export async function getStaticPaths({}){
    const res = await fetch('http://127.0.0.1:4000/Devices')
    const devices = await res.json()
    const paths = devices.map((device) => ({
        params: { id: device.Id.toString() },
      }))
      return ({ paths, fallback: false }
        )}

export async function getStaticProps(params){
    const res = await fetch (`http://127.0.0.1:4000/Devices/${params.id}`)
    const device = await res.json()
    return (
       { props: {device}
    
}
    )  
}