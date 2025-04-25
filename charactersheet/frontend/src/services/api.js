export async function fetchMessage() {
    const response = await fetch('/api/message');
    return response.json();
}