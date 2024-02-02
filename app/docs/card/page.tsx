import { Card, Container,AppBar } from "@yakad/ui";

export default function cards () {
    return(
        <main>
        <AppBar>
            <h1>Yakad Docs</h1>
        </AppBar>
            <Container style={{display:"flex", justifyContent:"center"}}>
            <Card style={{margin:"5rem", width:"50%", textAlign:"center"}}>
               <h1 style={{marginBottom:"40px"}}>Card of Yakad</h1> 
               <h2>yakad card is used for more beautiful and well-formed </h2>
               <h2>formatting of texts and page details.</h2>
               <h2>You can size these templates yourself.</h2>
               <h2>It also makes your screen more attractive with </h2>
               <h2>its beautiful background.</h2>
            </Card>
            </Container>
        </main>

    );
}