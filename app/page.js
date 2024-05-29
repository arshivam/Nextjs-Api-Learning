'use client'

export default function Home() {

  const handleClick = async() =>{
    let data = {
      owner: "shivam armarkar",
     "2-wheeler vehicle": "activa 5G",
     "4-wheeler vehicle": "Tata Nexon"
    }

    let a = await fetch("/api/add", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    let res = await a.json()
    console.log(res);
  }

  return (
    <div>
      <div>APi post request</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
