
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
    name: 'CYBERFORCE X',
    price: '299900 Rsd',
    inStock: true,
    image: '/images/pc_basic.svg',
    specs: ['Intel Core i7-13700F', '32GB DDR5', 'GeForce RTX 4070 12GB', '1TB NVMe SSD', '750W 80+ Gold']
  },
  {
    id: 2,
    name: 'TITAN EDGE',
    price: '379900 Rsd',
    inStock: true,
    image: '/images/pc_pro.svg',
    specs: ['Intel Core i9-13900F', '32GB DDR5', 'GeForce RTX 4080 16GB', '2TB NVMe SSD', '850W 80+ Gold']
  },
  {
    id: 3,
    name: 'ARCTIC WAVE',
    price: '229900 Rsd',
    inStock: true,
    image: '/images/pc_creator.svg',
    specs: ['AMD Ryzen 7 7700X', '32GB DDR5', 'GeForce RTX 4060 Ti 16GB', '1TB NVMe SSD', '650W 80+ Gold']
  },
  {
    id: 4,
    name: 'GOLIATH',
    price: '289900 Rsd',
    inStock: true,
    image: '/images/pc_basic.svg',
    specs: ['Intel Core i7-13700F', '32GB DDR5', 'GeForce RTX 4070 Ti 12GB', '1TB NVMe SSD', '750W 80+ Gold']
  },
  {
    id: 5,
    name: 'NANO',
    price: '179900 Rsd',
    inStock: true,
    image: '/images/pc_creator.svg',
    specs: ['AMD Ryzen 5 7600X', '16GB DDR5', 'GeForce RTX 4060 8GB', '512GB NVMe SSD', '550W 80+ Bronze']
  },
  {
    id: 6,
    name: 'CUBE STORM',
    price: '164900 Rsd',
    inStock: true,
    image: '/images/pc_pro.svg',
    specs: ['Intel Core i5-13400F', '16GB DDR4', 'GeForce RTX 3060 12GB', '512GB NVMe SSD', '600W 80+ Bronze']
  }
]
