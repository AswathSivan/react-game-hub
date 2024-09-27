import { HStack, Image, Text } from "@chakra-ui/react"
import Logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <HStack>
            <Image src={Logo} boxSize="50px" bg={"white"} borderRadius='full' padding={1} />
            <Text>Game Hub</Text>
        </HStack>
    )
}

export default Navbar