const API_ROOT = 'http://localhost:3001/'

export const updateUser = (id, user) => {
    return fetch(API_ROOT + 'users/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export const insertUser = user => {
    return fetch(API_ROOT + 'users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export const deleteUser = id => {
    return fetch(API_ROOT + 'users/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    });
}

export const selectUsers = () => {
    return fetch(API_ROOT + 'users');
}
