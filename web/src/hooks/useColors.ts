import { useColorModeValue } from "@chakra-ui/react";
import { generateKeyPair } from "crypto";

export const useColors = () => {

    const headerBg = useColorModeValue("gray.200", "gray.700");
    const primaryColorHover = useColorModeValue("gray.100", "generateKeyPair.700")

    return {
        headerBg,
        primaryColorHover
    };
};