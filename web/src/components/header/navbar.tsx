import { HStack, Link } from '@chakra-ui/layout';
import { FC } from 'react';

const NavBar: FC = ({ children }) => {

    return (
        <nav>
            <HStack spacing={5}>
                {/* TODO: Actual navigation links */}
                <Link href="/" >Home</Link>
                <Link href="/quiz">Start Quiz</Link>
                {/* <Link>Link</Link> */}
            </HStack>
        </nav>
    );
}

export default NavBar;