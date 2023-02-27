import Container from 'react-bootstrap/Container'

const FollowerContainer = (props) => {

    const followersDisplay = props.followerInfo.map((item, index) => {
        return <Container className='followers-display mx-3'>
            <div>
                <img src="" alt="" />
                <p>{item.platform}</p>
                <span className='username' >{item.username}</span>
            </div>
            <div>
                <h2 className='fs-1 fw-bold'>{item.followers}</h2>
                <p className='followers-text'>FOLLOWERS</p>
            </div>
            <div>
                <p className='followers-change'>{item.change} Today</p>
            </div>
        </Container>
    })

    return (
        <>
            {followersDisplay}
        </>
    )
}

export default FollowerContainer