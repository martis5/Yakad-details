import { AppBar, Container } from "@yakad/ui";

export default function appbar () {
    return (

        <main>
            <AppBar>
      <h1>Yakad Docs</h1>
            </AppBar>
            <Container maxWidth="lg">
                <AppBar>
                <h1>Yakad Appbar</h1>
                </AppBar>
                </Container>
        </main>

    );
}