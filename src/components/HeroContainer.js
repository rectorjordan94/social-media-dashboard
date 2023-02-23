import FollowerContainer from "./FollowerContainer"

const HeroContainer = () => {

    const followerInfo = [
        {platform: 'facebook', username: '@nathanf', followers: 1987, change: '12'},
        {platform: 'twitter', username: '@nathanf', followers: 1044, change: '99'},
        {platform: 'instagram', username: '@realnathanf', followers: 11000, change: '1099'},
        {platform: 'youtube', username: 'Nathan F.', followers: 8239, change: -144 },
    ]


    return (
        <div id='hero-container'>
            <div id='hero-container-grid'>
                <FollowerContainer followerInfo={followerInfo} />
            </div>
        </div>
    )
}

export default HeroContainer