import React from 'react'
import axios from "axios"
import { useEffect } from 'react'


const ProductsPage = (props) => {
    useEffect(() => {
        axios.get("http://localhost:5005/api/todoslosproductos")
            .then(datos => console.log(datos.data))
            .catch(console.log)
    }, [])
    return (
        <div>ProductsPage  {props?.user?.username}

        </div>
    )
}

export default ProductsPage