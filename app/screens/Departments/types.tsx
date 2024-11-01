// Define the Department interface
export interface Department {
    id: number;
    name: string;
    email: string;
    phone: string;
    responsible: string;
  }
  
  // Mock data for departments 
  export const departments: Department[] = [
    {
      id: 1232,
      name: 'Traffic',
      email: 'hm.mahadijr@gmail.com',
      phone: '+90 533 867 28 37',
      responsible: 'Hassan Mahadjir',
    },
    {
      id: 1233,
      name: 'Health',
      email: 'hm.mahadijr@gmail.com',
      phone: '+90 533 867 28 37',
      responsible: 'Hassan Mahadjir',
    },
  ];