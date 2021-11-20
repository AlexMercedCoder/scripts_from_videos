import { useQuery } from "react-query";

const getResponse = async () => {
    const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await r.json();
    return data
  };

export const useJsonpCall = () => useQuery("jsonp", getResponse)




export const renderQuery = (response, jsx) => {

    const {data, isLoading, error, refetch} = response

    if (error){
        return <h1>Error</h1>
    }
  
    if (isLoading){
        return <h1>Loading</h1>
    }
  
    return jsx(response)

}