import { useColorModeValue } from "@chakra-ui/react";

export const useColors = () => {

    const headerBg = useColorModeValue("gray.200", "gray.700");

    return {
        headerBg
    };
};