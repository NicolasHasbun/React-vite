import React,{useEffect, useState } from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const films = [
    { id: 1, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", title: "Assasin creed 1" },
    { id: 2, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", title: "Assasin creed 2" },
    { id: 3, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", title: "Assasin creed 3" },

];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }
    return (
        <>
        <Title greeting={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;