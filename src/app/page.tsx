"use client"
import { useState } from "react";

export default function Home() {
  const [Number, setNumber] = useState(1);
  const [name, setName] = useState("vachi");
  function incrementNumber() {
    setNumber(Number + 1);
  }
  function decrementNumber() {
    setNumber(Number - 1);
    if (Number <= 0) {
      setNumber(0);
    }
  }
  function clearNumber() {
    setNumber(0);
  }
  function changeName(e:any) {
    e.preventDefault();
    alert("คุณได้เปลี่ยนชื่อเป็น " + name);
  }
  function handlechangeName(e:any) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <div>
      จำนวนที่คลิก{Number}<br></br>
      <button onClick={incrementNumber}>กดเพื่อเพิ่มค่า</button><br></br>
      <button onClick={decrementNumber}>กดเพื่อลบค่า</button><br></br>
      <button onClick={clearNumber}>กดเพื่อเริ่มใหม่</button><br></br>
      <hr />

      <form onSubmit={changeName}>
      ชื่อ {name}<br/>
      <input value={name} type="text" name="name"onChange={handlechangeName}></input>
      <button type="submit">กดเพื่อเปลี่ยนชื่อ</button>
      </form>
    </div>
  );
}
