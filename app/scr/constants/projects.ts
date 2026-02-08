export interface Project {
  id: string;
  title: string;
  year: string;
  category: 'narrative' | 'documentary' | 'lifestyle';
  imageUrl: string;
  slug: string;
  // Novos campos:
  director: string;
  dop: string;
  production: string;
  gallery: string[]; // Array de caminhos de imagens
}
  
export const projects: Project[] = [
  {
    id: '1',
    title: 'O Caminho do Sol',
    year: '2023',
    category: 'narrative',
    imageUrl: '/images/home/home_hero.jpg',
    slug: 'o-caminho-do-sol',
    director: 'Tiago Guedes',
    dop: 'João Ribeiro',
    production: 'Leopardo Filmes',
    gallery: [
      '/images/home/home_hero.jpg',
      '/images/home/home_hero.jpg',
      '/images/home/home_hero.jpg',
    ]
  },
  {
    id: '2',
    title: "Lobito Bound: A Journey to Africa's New Frontier",
    year: '2025',
    category: 'documentary',
    imageUrl: '/images/documentary/lobito/0Lobito.jpeg',
    slug: 'lobito',
    director: 'Leopold Belanger',
    dop: 'João Ribeiro',
    production: 'Leopardo Filmes',
    gallery: Array.from({ length: 33 }, (_, i) => `/images/documentary/lobito/${i + 1}Lobito.jpeg`),
  },
];