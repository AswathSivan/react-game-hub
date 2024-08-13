import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
    const { data } = useGenre()
    return (
        <>
            <List>
                {data.map(g => <ListItem key={g.id} padding='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                        <Text fontSize='lg'>{g.name}</Text>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList