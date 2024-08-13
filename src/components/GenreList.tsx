import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
    const { data, isLoading, error } = useGenre()

    if (isLoading) return <Spinner />
    if (error) return null
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