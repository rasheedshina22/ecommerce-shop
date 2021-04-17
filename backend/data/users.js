import brcypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: brcypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'shina rasheed',
    email: 'shina@example.com',
    password: brcypt.hashSync('123456', 10),
  },
  {
    name: 'opeyemi rasheed',
    email: 'opeyemi@example.com',
    password: brcypt.hashSync('123456', 10),
  },
];

export default users;
