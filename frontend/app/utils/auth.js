import axios from 'axios';

export async function fetchUser() {
    try {
        const res = await axios.get("http://localhost:8000/api/user", {
            withCredentials: true, // <-- fixed typo here
        });
        return res.data;
    } catch {
        return null;
    }
}