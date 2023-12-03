import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/resident.png'
import zelda from '../../assets/zelda.png'
import diablo from '../../assets/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Zelda',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 300,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['15%', 'R$ 230,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['5%', 'R$ 290,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 300,00'],
    image: diablo
  },
  {
    id: 8,
    category: 'Acao',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quisquam nisi eveniet',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['15%', 'R$ 230,00'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Acao" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
