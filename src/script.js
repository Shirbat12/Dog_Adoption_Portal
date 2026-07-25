// script.js
const MOCK_URL = "https://384d7c2c-9892-4b43-a684-ebdef8616da6.mock.pstmn.io/dogs";

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