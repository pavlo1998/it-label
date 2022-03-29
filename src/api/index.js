export const getUsers = async () => {
    const request = await fetch('https://api.github.com/users');
    return await request.json();
}
