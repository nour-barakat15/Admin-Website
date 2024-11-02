// Define the Department interface
export interface Department {
    id: number;
    name: string;
    email: string;
    phone: string;
    responsible: string;
    avatar: string;
  }
  
  // Mock data for departments 
  export const departments: Department[] = [
    {
      id: 1232,
      name: 'Traffic',
      email: 'hm.mahadijr@gmail.com',
      phone: '+90 533 867 28 37',
      responsible: 'Hassan Mahadjir',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s'
    },
    {
      id: 1233,
      name: 'Health',
      email: 'hm.mahadijr@gmail.com',
      phone: '+90 533 867 28 37',
      responsible: 'Hassan Mahadjir',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1r6Lyo0NJ_YtuCuqcJ0C5aQguHfWa07AYQ&s'
    },
  ];