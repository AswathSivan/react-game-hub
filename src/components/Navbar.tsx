import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
const Navbar = () => {
    return (
        <HStack p={3}>
            <Image src={Logo} boxSize="50px" bg={"white"} borderRadius='full' padding={1} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar