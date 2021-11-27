
import { useRouter } from "next/dist/client/router"
export default function Lab({lab}){

    return (
      <>
        <h1>Page for specific todo: </h1>
        <li> {lab.Id},{lab.Description} </li>
      </>
    )
}


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:4000/Labs')
    const labs = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = labs.map((lab) => ({
      params: { id: lab.Id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

// This also gets called at build time
export async function getStaticProps({ params }) {
  
  const {id} = params
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //*Do not this
    // const res = await fetch(`http://127.0.0.1:4000/Labs/${params.id}`)
    // const lab = await res.json()
const lab = labs.find((lab)=>lab.Id === parsetInt(id))
console.log(lab)

  
    // Pass post data to the page via props
    return { props: { lab } }
  }
  