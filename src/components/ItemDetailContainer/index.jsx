import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const film = [
{ id: 1, price:100, image: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/bfac1587-f41a-46ea-81c7-a2e94414ad80/john-wick-movie-poster.png", category:'films' ,title: "John Wick" },
{ id: 2, price:120, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6a8d90f-1973-486e-bc10-db0560fcc2da/dekafu9-5f33d59b-2691-4842-9e62-56002c9259c1.png/v1/fit/w_375,h_375/i_saw_the_devil__2010__pics_folder_01_by_ae00505_dekafu9-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYjZhOGQ5MGYtMTk3My00ODZlLWJjMTAtZGIwNTYwZmNjMmRhXC9kZWthZnU5LTVmMzNkNTliLTI2OTEtNDg0Mi05ZTYyLTU2MDAyYzkyNTljMS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zsvQlMrw9vKPVaaO9yX4VDbawedjT7MtL-1E0WdNhKQ", category:'films' ,title: "I saw the devil" },
{ id: 3, price:130, image: "https://thetrendyart.com/cdn/shop/products/vintage-movie-wall-art-487557_5000x.webp?v=1661193829", category:'films' ,title: "ScarFace" },
{ id: 4, price:140, image: "https://cdnx.jumpseller.com/peliculas-de-papel/image/24380974/resize/640/640?1653455976", category:'series' ,title: "Breaking Bad" },
{ id: 5, price:150, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0ac5a50-7e24-4dac-a0dc-1fa7d92d66f0/df2ddf9-cbeb26ce-f52c-4e90-9255-3ca8c02a184e.png/v1/fill/w_1280,h_1144/peacemaker_season_1_folder_icon_by_enengdunluth13_df2ddf9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0NCIsInBhdGgiOiJcL2ZcL2MwYWM1YTUwLTdlMjQtNGRhYy1hMGRjLTFmYTdkOTJkNjZmMFwvZGYyZGRmOS1jYmViMjZjZS1mNTJjLTRlOTAtOTI1NS0zY2E4YzAyYTE4NGUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.C3HSnnnd9JVbHYTXAb0Ms-_iO-CsCjMnbdjoTrwZH5o", category:'series' ,title: "Peacemaker" },

];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 1000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;