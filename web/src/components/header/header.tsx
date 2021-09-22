import { Flex, Heading, HStack } from '@chakra-ui/layout';
import { FC } from 'react';
import { useColors } from '../../hooks/useColors';
import NavBar from './navbar';

const Header: FC = ({ children }) => {

    const appName = "YouQuiz";
    const { headerBg } = useColors();

    return (
        <header>
            <Flex justifyContent="space-between" bg={headerBg} p={3}>
                <HStack spacing={10}>
                    <Heading size="md">{appName}</Heading>
                    <NavBar />
                </HStack>
            </Flex>
        </header>
    );
}

export default Header;