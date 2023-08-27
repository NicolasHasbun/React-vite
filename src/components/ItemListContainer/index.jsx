import React,{useEffect, useState } from 'react';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const films = [
    { id: 1, price:100, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", category:'films' ,title: "Assasin creed" },
    { id: 2, price:120, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Simvol-iz-dishonored.svg/2036px-Simvol-iz-dishonored.svg.png", category:'films' ,title: "Dishonored" },
    { id: 3, price:130, image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Blasphemous_logo.png", category:'films' ,title: "Blasphemus" },
    { id: 4, price:140, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Animal_Crossing_Leaf.svg/504px-Animal_Crossing_Leaf.svg.png", category:'series' ,title: "Animal Crossing" },
    { id: 5, price:150, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Zelda_2017.svg/800px-Zelda_2017.svg.png", category:'series' ,title: "Zelda" },

];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
        } else{
            getData.then(res => setData(res));
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
