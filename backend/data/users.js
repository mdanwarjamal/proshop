import brcypt from 'bcryptjs'

const users = [
    {
        name: "Md Anwar Jamal",
        email: 'mern.mdanwarjamal@gmail.com',
        password:brcypt.hashSync('Anwar@786', 20),
        isAdmin: true
    },
    {
        name: "Md Asif Kamal",
        email: 'mern.mdasifkamal@gmail.com',
        password:brcypt.hashSync('Asif@786', 10)
    },
    {
        name: "Md Nasif Kamal",
        email: 'mern.mdnasifkamal@gmail.com',
        password:brcypt.hashSync('Nasif@786', 10)
    },
    {
        name: "Md Aquib Shahab",
        email: 'mern.mdaquibshahab@gmail.com',
        password:brcypt.hashSync('Aquib@786', 10)
    },
]

export default users