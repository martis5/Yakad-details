import {Main, AppBar, Container, Stack, Card, Row, Button, Hr } from "@yakad/ui";

export default function Buttons () {
    return (

        <main>
            <AppBar>
                <h1>Yakad Docs</h1>
            </AppBar>

            <Container maxWidth="lg">
                <h1>YakadButtons</h1>

                <Main>
                    <Container maxWidth="md">
                        <h2>Size:</h2>
                        <Stack>
                            <Card 
                            style={{
                                maxWidth:"60rem",
                                margin:"auto",
                            }}
                            >
                                <Row style={{justifyContent:"center"}}>
                                <Button variant="filledtonal" size="small">SMALL</Button>
                                <Button variant="filledtonal" size="medium">MEDIUM</Button>
                                <Button variant="filledtonal" size="large">LARGE</Button>
                                </Row>
                            </Card>
                            <Hr variant="dashed"></Hr>

                            <h2>Variant:</h2>

                            <Card style={{
                                maxWidth:"60rem",
                                margin:"auto",
                            }}>
                                <Stack>
                                <Row style={{justifyContent:"center"}}>
                                    <Button variant="elevated">Elevated</Button>
                                    <Button variant="fab">Fab</Button>
                                    <Button variant="filled">Filled</Button>
                                    <Button variant="filledtonal">Filledtonal</Button>
                                </Row>
                                <Row style={{justifyContent:"center"}}>
                                    <Button variant="link">Link</Button>
                                    <Button variant="outlined">Outlined</Button>
                                    <Button variant="text">Text</Button>
                                    <Button variant="tonal">Tonal</Button>
                                </Row>
                                </Stack>
                            </Card>
                            <Hr variant="dashed"></Hr>
                            <h2>Border Styles:</h2>
                            <Card style={{
                                maxWidth:"60rem",
                                margin:"auto",
                            }}
                            >
                                <Row style={{justifyContent:"center"}}>
                                    <Button variant="filled" borderStyle="none">None</Button>
                                    <Button variant="filled" borderStyle="rounded">Rounded</Button>
                                    <Button variant="filled" borderStyle="semi">Semi</Button>
                                </Row>
                            </Card>
                        </Stack>
                    </Container>


                </Main>
            </Container>
        </main>

    );
}