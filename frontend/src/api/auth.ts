import { API_BASE } from "./config";

export const login = async (username: string, password: string) => {
    const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });
    return response.json();
};

