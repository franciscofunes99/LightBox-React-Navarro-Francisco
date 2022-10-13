import { useState } from "react"

export const Count = () => {
    const [cant, setCant] = useState(1)

    const Aumentar = ()=>{
        setCant(cant + 1)
    } 
    const Restar = ()=>{
        if(cant < 2 ) return
        setCant(cant - 1)
    }   
  return (
    <>
            <div className="d-flex align-items-center">
                <i className="btn bi bi-arrow-left-square-fill text-bg-dark fs-3 " onClick={Restar}> - </i>               
                <h3 className=" mt-2 ">{cant}</h3>
                <i className="btn bi bi-arrow-right-square-fill text-bg-dark fs-3 " onClick={Aumentar}> + </i> 
            </div>

        </>
  )
}
