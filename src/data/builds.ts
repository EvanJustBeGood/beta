
export interface PcBuild {
  id: number
  name: string
  price: string
  inStock: boolean
  image: string
  specs: string[]
}

export const builds: PcBuild[] = [
  {
    id: 1,
    name: 'LunaPC Basic',
    price: '1000€',
    inStock: true,
    image: '/images/pc_basic.svg',
    specs: ['Intel Core i5-12400F', '16GB DDR4', 'GeForce RTX 3060 12GB', '512GB NVMe SSD', '650W 80+ Bronze']
  },
  {
    id: 2,
    name: 'LunaPC Pro',
    price: '2000€',
    inStock: false,
    image: '/images/pc_pro.svg',
    specs: ['Intel Core i7-13700F', '32GB DDR5', 'GeForce RTX 4080 16GB', '1TB NVMe SSD', '750W 80+ Gold']
  },
  {
    id: 3,
    name: 'LunaPC Creator',
    price: '1500€',
    inStock: true,
    image: '/images/pc_creator.svg',
    specs: ['Ryzen 7 5800X', '32GB DDR4', 'GeForce RTX 3070 8GB', '1TB NVMe SSD', '750W 80+ Gold']
  }
]
