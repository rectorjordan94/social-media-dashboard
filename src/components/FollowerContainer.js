const FollowerContainer = (props) => {

    const followersDisplay = props.followerInfo.map((item, index) => {
        return <div className='followers-display'>
            <div>
                <img src="" alt="" />
                <p>{item.platform}</p>
                <span className='username' >{item.username}</span>
            </div>
            <div>
                <h2>{item.followers}</h2>
                <p>FOLLOWERS</p>
            </div>
            <div>
                <p>{item.change} Today</p>
            </div>
        </div>
    })

    return (
        <>
            {followersDisplay}
        </>
    )
}

export default FollowerContainer