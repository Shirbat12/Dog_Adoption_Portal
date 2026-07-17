// script.js
const MOCK_URL = "https://fb7ed47d-0c2b-4485-bba3-f78b669b7843.mock.pstmn.io/dog";

async function fetchAllDogs() {
    try {
        const res = await fetch(MOCK_URL);
        if (!res.ok) throw new Error("Failed to fetch dogs");
        const dogs = await res.json();
        return dogs;
    } catch (err) {
        console.error("Error:", err.message);
        return [];
    }
}

async function fetchDogById(id) {
    const dogs = await fetchAllDogs();
    return dogs[id];
}

function getDogIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function formatBoolean(value) {
    if (value === null) return "Unknown";
    return value ? "Yes" : "No";
}