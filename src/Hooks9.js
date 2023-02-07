import React, {useState} from "react";

export default function Hooks9(){
    const [filterdata, setFilterdata] = useState([]);
    let wordname ="";
    let data = [
        "Hailey",
        "Rajvi",
        "Rushi",
        "Wini",
        "Yashwini",
        "Dev",
        "Rutvik",
        "Anuj",
        "Harsh",
        "Nirav",
        "Nirmal",
        "abcde",
        "xyzw",
        "John Doe",
        "Jeny Den",
        "Lucifer Morningstar",
        "Chloe Decker",
        "Linda Martin",
        "Ella Lopez",
        "Daniel Espinoza",
        "Chorlette Richards",
        "Amandiel",
        "Samael",
    ];

    function searchWord(searchword) {
        if (searchWord !== "")
        {
            wordname = searchword;
            const filteredword = data.filter((item)=>{
                return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(wordname.toLowerCase());
            });
            setFilterdata(filteredword);
        }
    }

    return(
        <> 
            <h2>Name Search</h2>
            <input placeholder="Search...." type="text" onChange={(e) => searchWord(e.target.value)} />
            {filterdata.map((word, i) => {
                return <div key={i}>{word}</div>
            })}
        </>
    );
}