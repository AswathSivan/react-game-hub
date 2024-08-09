import { Image, HStack, Text } from "@chakra-ui/react"
import GameLogo from '../assets/game-logo.png'

const Navbar = () => {
    return (
        <HStack>
            <Image src={GameLogo} boxSize={100}></Image>
            <Text>Navbar</Text>
        </HStack>
    )
}

export default Navbar