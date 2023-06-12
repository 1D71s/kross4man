import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { renderToItem } from '../store/mySlise'
import ItemLink from "../components/ItemLink/ItemLink"

const ItemPages= () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.shop.renderItem)

    useEffect(() => {
        dispatch(renderToItem({id}))
    }, [dispatch, id])


    return (
        <div>
           <ItemLink itemProd={product}/>
        </div>    
    )
}

export {ItemPages}