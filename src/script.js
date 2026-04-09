// script.js
const MOCK_URL = "https://fb7ed47d-0c2b-4485-bba3-f78b669b7843.mock.pstmn.io/dog"; 

async function getAllDogs() {
    try {
        const res = await fetch(MOCK_URL);
        if (!res.ok) throw new Error("Failed to fetch dogs");
        const dogs = await res.json();
        // return dogs data
        return dogs; 
    } catch (err) {
        console.error("Error:", err.message);
        return []; 
    }
}