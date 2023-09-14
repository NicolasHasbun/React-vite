import React,{useEffect, useState } from 'react';
import { getFirestore, collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import image1 from "../../assets/image1.jpg"



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryColletion = collection(querydb, 'products');
         if (categoriaId){
            const queryFilter = query(queryColletion, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then (res => setData (res.docs.map(product => ({id: product.id, ...product.data() }))))
         } else{
            getDocs(queryColletion)
            .then (res => setData (res.docs.map(product => ({id: product.id, ...product.data() }))))
         }
        
    }, [categoriaId])

    return (
        <>
        <Title greeting={texto}/>
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
