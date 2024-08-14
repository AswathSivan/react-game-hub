import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"


interface Props {
    onSelectedGenre(genre: Genre): void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenre()

    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <List>
                {data.map(g => <ListItem key={g.id} padding='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                        <Button fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(g)} fontSize='lg' variant='link'>{g.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList