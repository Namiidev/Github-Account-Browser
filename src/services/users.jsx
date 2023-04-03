import { urlFetch } from "./fetch";

async function gettingUsers(user) {
    const response = await fetch(`${urlFetch}${user}`, {
        method: 'GET',
    });
    const payload = response.json();

    return payload;
}   
    

export default gettingUsers;