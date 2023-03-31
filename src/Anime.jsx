import { useState, useEffect } from "react";
import './Anime.css';
function Anime() {
let[d,setD]=useState(null)

useEffect(()=>{
    fetch("https://api.jikan.moe/v4/anime")
    .then((res)=>{return res.json() })
    .then((data)=>{setD(data.data);  console.log(data.data); })
    
},[])

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f11457afb1msh4ae5cd268d90eb3p128ad7jsn5c8b8dd3f46c',
// 		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
// 	}
// };

// fetch('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));





    return ( 
        <>
        {/* <div clssName="main"> */}
        <nav>
         -------A.N.I.M.E.S-------
        </nav>
 <div className="anime">
        {d && d.map((v)=>{
            return (
                <>
                    <div className="anim">
                        <img src={v.images.jpg.image_url} alt=""/>
                        <h1>{v.title}</h1>
                        <h1>{v.year}</h1>
                        <h1>{v.aired.prop.month}</h1>
                    </div>
                
                </>
            );
        }) }
       </div>
       </>
     );
}

export default Anime;