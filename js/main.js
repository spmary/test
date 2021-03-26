let students = [
    {
        name: 'Светлова',
        dob: '15.01.2000',
        gender: 'ж',
        group: '01',
    },
    {
        name: 'Иванов',
        dob: '10.05.1999',
        gender: 'м',
        group: '01',
    },
    {
        name: 'Аникина',
        dob: '23.04.2001',
        gender: 'ж',
        group: '02',
    },
    {
        name: 'Сидоров',
        dob: '17.08.2004',
        gender: 'м',
        group: '02',
    },
    {
        name: 'Путин',
        dob: '20.06.2000',
        gender: 'м',
        group: '03',
    },

];

let users = students.map(user=>({ name: user.name}));
console.log(users.sort());