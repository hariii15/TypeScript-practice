import axios from 'axios'
import type React from 'react';
import { useEffect, useState } from 'react';

const API:string = "https://improved-space-fortnight-wr755xr745j6f9964-3000.app.github.dev"

interface todo  {
    id : number;
    name: string;
    completed: boolean
    importance: "hobby" | "serious" | "extreme";    
}

const Home : React.FC = () =>{

    const [data, setData] = useState<todo[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchUser = async () => {
            try{
                setLoading(true)

                const responsePromise = axios.get<todo[]>(`${API}/get-todo`)

                const response = await responsePromise

                const todo = response.data

                setData(todo)
            }catch{
               console.log("there is a error! you are cooked")
            }
            finally{
                setLoading(false)
            }
        }
    fetchUser()
    },[]) 


    if(loading) return <div>loading</div>


return(
    <div>
        <h1>To do list</h1>
        <div className=''>
        {
            data.map((t) => 
                <div className='container' key={t.id}>
                    <div>{t.name}</div>
                    <div>{t.importance}</div>
                    <div>{t.completed ? 'true' : 'false'}</div>
                </div>
            )
        }
        </div>

    </div>
)
}




export default Home;