"use client"

import { useState } from "react";

export default function add() {
    const [item, setItem] = useState([""]);
    const [name, setName] = useState("");

    function addNewName(e:any) {
        e.preventDefault();
        setItem([...item, name]);
        setName("");
    }

    function handledNameChange(e:any) {
        e.preventDefault();
        setName(e.target.value);
    }

    return (
        <div>
            <ul>
                {item.map(i => (<li key={i}>{i}</li>))}
            </ul>
            <form onSubmit={addNewName}>
                <input type="text" value={name} onChange={handledNameChange} />
                <button type="submit">เพิ่มรายชื่อ</button>
            </form>
        </div>
    );
}