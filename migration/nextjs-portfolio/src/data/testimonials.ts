export interface Testimonial {
  name: string;
  company: string;
  photo: string;
  quote: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ma Asela Vocales',
    company: 'Vocales Design Studio',
    photo: '/images/clients/Vocales.jpeg',
    quote: 'Kainen is fast and diligent worker. Very good freelancer and greatly recommended!',
    title: 'Product Manager',
  },
  {
    name: 'Susan Bowen',
    company: 'Tech Innovations Inc.',
    photo: 'https://randomuser.me/api/portraits/women/61.jpg',
    quote: 'Thank you for working so hard on this project. The results are amazing and we could not be happier.',
    title: 'Project Lead',
  },
  {
    name: 'Aaron Smith',
    company: 'Inkling AI',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    quote: 'Incredible attention to detail and user experience. The design exceeded our expectations.',
    title: 'CEO',
  },
];
