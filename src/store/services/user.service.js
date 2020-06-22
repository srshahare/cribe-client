
export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {

    return fetch('https://thawing-reaches-88200.herokuapp.com/auth/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => {
        if(res.status === 422){
            throw new Error('Validation error, please provide correct input values.');
        }
        if(res.status !== 200 && res.status !== 201){
            console.log('Error!');
            throw new Error('Authentication failed!');
        }
        return res.json();
    })
    .then(resData => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', resData.token);
        localStorage.setItem('uid', resData.uid);
        return resData;
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
}

function getAll() {
    return fetch(`https://thawing-reaches-88200.herokuapp.com/me`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(res => {
        return res.json();
    })
    .then(user => {
        return user.user;
    })
}
