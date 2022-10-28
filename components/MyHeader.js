import NextLink from "next/link"
import { Heading, Stack, Button } from '@chakra-ui/react'

export default function MyHeader(props) {

    let scheme = "green";

    return (
        <header>
            <nav>
                <Stack direction={['column', 'row']} spacing={4} align='center'>
                    <NextLink href='/' passHref>
                        <Button colorScheme={scheme} variant='outline'>Home</Button>
                    </NextLink>
                    <NextLink href='/about' passHref>
                        <Button colorScheme={scheme} variant='outline'>About</Button>
                    </NextLink>
                    <NextLink href='/contact' passHref>
                        <Button colorScheme={scheme} variant='outline'>Contact</Button>
                    </NextLink>
                    <NextLink href='/services' passHref>
                        <Button colorScheme={scheme} variant='outline'>Services</Button>
                    </NextLink>
                    <NextLink href='/404040404040404' passHref>
                        <Button colorScheme={scheme} variant='outline'>404</Button>
                    </NextLink>
                </Stack>
            </nav>
        </header>
    )
}