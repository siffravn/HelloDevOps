import { useColorModeValue } from "@chakra-ui/react";

export const useColors = () => {

    const headerBg = useColorModeValue("gray.200", "gray.700");
    const optionBg = useColorModeValue("gray.200", "gray.700");
    const optionBgHover = useColorModeValue("gray.300", "gray.800");

    return {
        headerBg,
        optionBg,
        optionBgHover
    };
};