function deepFreeze(object) {
Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == 'object' && prop !== null) {
    deepFreeze(prop);
    }  
});

return Object.freeze(object);
}

const complexUser = {
name: 'bqi',
email: 'bqi@dicoding.com',
preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
    city: 'Jember',
    zip: '2000'
    }
    }
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = 'Jember';

console.log(complexUser.preferences.address.city);