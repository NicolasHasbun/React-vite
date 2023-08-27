import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const film = [
{ id: 1, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", category:'films' ,title: "Assasin creed" },
{ id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Simvol-iz-dishonored.svg/2036px-Simvol-iz-dishonored.svg.png", category:'films' ,title: "Dishonored" },
{ id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Blasphemous_logo.png", category:'films' ,title: "Blasphemus" },
{ id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Animal_Crossing_Leaf.svg/504px-Animal_Crossing_Leaf.svg.png", category:'series' ,title: "Animal Crossing" },
{ id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Zelda_2017.svg/800px-Zelda_2017.svg.png", category:'series' ,title: "Zelda" },

];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;