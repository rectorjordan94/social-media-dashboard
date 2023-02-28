import Container from 'react-bootstrap/Container'



const FollowerContainer = (props) => {

    const followersDisplay = props.followerInfo.map((item, index) => {
        return <Container key={index} className='followers-display mx-3'>
            <div>
                {
                    item.platform === "instagram"
                    ?
                    <img src="images/icon-instagram.svg" className="icon" alt="" />
                    :
                    null
                }
                {
                    item.platform === "facebook"
                    ?
                    <img src="/images/icon-facebook.svg" className="icon" alt="" />
                    :
                    null
                }
                {
                    item.platform === "twitter"
                    ?
                    <img src="images/icon-twitter.svg" className="icon" alt="" />
                    :
                    null
                }
                {
                    item.platform === "youtube"
                    ?
                    <img src="images/icon-youtube.svg" className="icon" alt="" />
                    :
                    null
                }

                <span className='username' >{item.username}</span>
            </div>
            <div>
                <h2 className='fs-1 fw-bold'>{item.followers}</h2>
                <p className='followers-text'>FOLLOWERS</p>
            </div>
            <div>
                {   item.change >= 0
                    ?
                    <div>
                        <img src="/images/icon-up.svg" alt="" />
                        <span className='up-change'> {item.change} Today</span>
                    </div>
                    :
                    null
                }
                {   item.change <= 0
                    ?
                    <div>
                        <img src="/images/icon-down.svg" alt="" />
                        <span className='down-change'> {item.change} Today</span>
                    </div>
                    :
                    null
                }
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