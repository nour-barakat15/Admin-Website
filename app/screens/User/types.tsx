export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
    role: 'user' | 'staff' | 'admin';
  }
  
  // Mock data for users
  export const users: User[] = [
    //user entries
    {
      id: 1232,
      firstName: 'Hassan',
      lastName: 'Mahadjir',
      email: 'hm.mahadjir@gmail.com',
      phone: '+90 533 867 28 37',
      status: 'Active',
      role: 'user',
    },
    {
      id: 1233,
      firstName: 'Hassan',
      lastName: 'Mahadjir',
      email: 'john.doe@example.com',
      phone: '+90 533 123 45 67',
      status: 'Inactive',
      role: 'user',
    },
    {
      id: 1234,
      firstName: 'Hassan',
      lastName: 'Mahadjir',
      email: 'jane.smith@example.com',
      phone: '+90 533 234 56 78',
      status: 'Active',
      role: 'user',
    },

    //staff entries
    {
      id: 2232,
      firstName: 'Ayesha',
      lastName: 'Atif',
      email: 'hm.mahadjir@gmail.com',
      phone: '+90 533 867 28 37',
      status: 'Inactive',
      role: 'staff',
    },
    {
      id: 2233,
      firstName: 'Ayesha',
      lastName: 'Atif',
      email: 'john.doe@example.com',
      phone: '+90 533 123 45 67',
      status: 'Active',
      role: 'staff',
    },
    {
      id: 2234,
      firstName: 'Ayesha',
      lastName: 'Atif',
      email: 'jane.smith@example.com',
      phone: '+90 533 234 56 78',
      status: 'Inactive',
      role: 'staff',
    },

    //admin entries
    {
      id: 3232,
      firstName: 'Nour',
      lastName: 'Barakat',
      email: 'hm.mahadjir@gmail.com',
      phone: '+90 533 867 28 37',
      status: 'Active',
      role: 'admin',
    },
    {
      id: 3233,
      firstName: 'Nour',
      lastName: 'Barakat',
      email: 'john.doe@example.com',
      phone: '+90 533 123 45 67',
      status: 'Inactive',
      role: 'admin',
    },
    {
      id: 3234,
      firstName: 'Nour',
      lastName: 'Barakat',
      email: 'jane.smith@example.com',
      phone: '+90 533 234 56 78',
      status: 'Active',
      role: 'admin',
    },
  ];