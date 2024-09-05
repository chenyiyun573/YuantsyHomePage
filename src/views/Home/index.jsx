import Agent from './components/Agent';
import Tree from './components/Tree/index.JSX';
import Models from './components/Models';
import Search from './components/Search';
import Chip from './components/Chip';
import Career from './components/Career';
const Home = () => {
  return (
    <>
      {/* <!-- Agent Section --> */}
      <Agent />

      {/* <!-- Tree --> */}
      <Tree />
      
      {/* <!-- Models --> */}
      <Models />
      
      <Search />
      
      <Chip />
      
      <Career />
    </>
  )
}

export default Home;