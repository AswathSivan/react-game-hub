import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/usePlatforms"
import usePlarform from "../hooks/usePlatform"

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error, isLoading } = usePlatforms()
    const selectedPlatform = usePlarform(selectedPlatformId)

    if (error || isLoading) return
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector