import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
const Navbar = () => {
    return (
        <HStack justifyContent="space-between" p={3}>
            <Image src={Logo} boxSize="50px" bg={"white"} borderRadius='full' padding={1} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar