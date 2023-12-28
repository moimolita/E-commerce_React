import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../asyncMock/asyncMock"

const ItenListContainer = ({greeting}) => {

    const [products, setProducts] = useState([false])

    const { categoryId } = useParams()

    useEffect( () => {

        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .them(response => {
                serProducts(response)
            })

            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemList products = {products} />
            </div>
        </div>
    )
}

export default ItenListContainer