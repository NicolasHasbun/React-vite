import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = { id: 1, image: "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo.png", title: "Assasin creed" };


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;