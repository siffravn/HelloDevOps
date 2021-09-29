import { Button } from '@chakra-ui/button';
import { Link } from '@chakra-ui/layout';
import { FC } from 'react';
import BasicLayout from '../components/layouts/basicLayout';


const Home: FC = () => {

  return (

    <BasicLayout>
     <Button as={Link} href="/quiz">Start quiz</Button>
    </BasicLayout>
   
  );
}

export default Home;
