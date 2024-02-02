import {Main, AppBar, Button, Container, Row } from "@yakad/ui";
import Link from "next/link";

export default function Docs () {
    return (

      <main>
      <AppBar>
      <h1>Yakad Docs</h1>
     </AppBar>

     <Main>
      <Container maxWidth="lg">
        <Row>
          <Link href="./docs/appbar">
      <Button variant="filled">AppBar</Button>
      </Link>
      <Link href="./docs/button">
      <Button variant="filled">Button</Button>
      </Link>
      <Link href="./docs/card">
      <Button variant="filled">Card</Button>
      </Link>
      </Row>
      </Container>
     </Main>
      </main>

    );
}