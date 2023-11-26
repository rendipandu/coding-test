import PokeList from '@/components/PokeList';

const Home = () => {

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10'>
        <PokeList />
      </div>
    </>
  )
}

export default Home