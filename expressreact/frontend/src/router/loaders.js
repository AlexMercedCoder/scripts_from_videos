import URL from "./url"

export const indexLoader = async () => {
 const response = await fetch(URL + "/cheese")
 const cheeses = await response.json()
 return cheeses
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/cheese/${params.id}`)
    const cheese = await response.json()
    return cheese
   }