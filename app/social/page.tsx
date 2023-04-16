import SocialPlatforms from "./(components)/socialPlatforms"
import Mail from "./(components)/mail"

export default function Social() {
    return (
        <div className="animate-opacity">
            <div className="contentIsland mb-6">
                <SocialPlatforms />
            </div>
            <div className="contentIsland mb-6">
                <Mail />
            </div>
        </div>
    )
}