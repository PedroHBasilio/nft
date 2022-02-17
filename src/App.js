import { Flex } from '@chakra-ui/react';
import { NftCard } from './components/Card/Card';

function App() {
  return (
    <Flex 
    bgGradient='linear(to-b, blue.700, blue.750)' 
      justifyContent="center" 
      h="100vh" 
      alignItems="center">
      <NftCard/>
    </Flex>
  );
}

export default App;
