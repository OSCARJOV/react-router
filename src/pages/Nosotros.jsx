import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Nosotros = () => {

let [searchParams, setSearchParams] = useSearchParams(); //setSearchParams sirve para mdificar la url despues de =

const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

if(loading) return <p>Loading data...</p>
if(error) return <p>error....</p>

    const handleChange = (e) => {
        let filter = e.target.value  // esto es lo que se escribe en el buscador
        
        if(filter) {
        setSearchParams({filter: filter}) // le actualizo o paso el contenido de filter
        } else {
            setSearchParams({})
        }


    }
    return(
        <>
       <h1>Nosotros</h1> 
       <input type="text" 
       onChange={handleChange} 
       className="form-control my-3" 
       value={searchParams.get("filter") || ""}/> 
       {/* // lee lo que esta despues de filter y lo pone en el buscador*/}

       <ul className="list-group">
        {
            data.filter((item) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = item.title.toLowerCase();
                return name.startsWith(filter.toLowerCase());   //retorna lo que comience con eso 

            })
            
            .map(item => (
                <Link to={`/nosotros/${item.id}`} 
                key={item.id} 
                className="list-group-item"
                >{item.id} - {item.title} </Link>
            ))
        }
       </ul>
       </>
    )
}

export default Nosotros