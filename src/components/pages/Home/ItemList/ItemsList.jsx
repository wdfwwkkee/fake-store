import React from 'react'
import Item from './Item/Item'
import { service } from "../../../../service/service";
import { useQuery } from "@tanstack/react-query";

const ItemsList = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["data"],
        queryFn: () => {
            return service.getProducts();
        },
    });

    if (isLoading)
        return (
            <div className='ProductList'>
                <div className="ProductContent" style={{color : 'white'}}>
                    Loading...
                </div>
            </div>
        );
    if (isError) return <p>Error </p>;


    return (
        <div className='ProductList'>
            <div className="ProductContent">
                {data.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default ItemsList