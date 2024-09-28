import { Card, CardBody, Skeleton } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px">
                <CardBody />
            </Skeleton>
        </Card>
    )
}

export default GameCardSkeleton