import DarkToggle from "./DarkToggle"
import Container from 'react-bootstrap/Container'

const TitleContainer = () => {

    return (
        <Container id='title-container'>
            <h1 id='social-media-dashboard'>Social Media Dashboard</h1>
            <h3 id='total-followers-count'>Total Followers: 23,004</h3>
            <DarkToggle />
        </Container>
    )
}

export default TitleContainer