export const loginRequest = (url,data) => {
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => {
        if(!res.ok){
            alert('Por favor verifique email y contraseña')
        } else {
            return res.json();
        }
    })
}
