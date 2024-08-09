import { Image, HStack } from "@chakra-ui/react"
import GameLogo from '../assets/game-logo.png'
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='20px'>
            <Image src={GameLogo} boxSize={100}></Image>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default Navbar