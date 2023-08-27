import React,{useEffect, useState } from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const films = [
    { id: 1, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", title: "Assasin creed" },
    { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Simvol-iz-dishonored.svg/2036px-Simvol-iz-dishonored.svg.png", title: "Dishonored" },
    { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Blasphemous_logo.png", title: "Blasphemus" },

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