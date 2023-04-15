import MusicPlatforms from "./(components)/musicPlatforms"
import MusicWorkInProgress from "./(components)/musicWorkInProgress"

export default function Music() {
    return (
        <div className="animate-fadeInLeft">
            <div className="contentIsland mb-6">
                <MusicPlatforms />
            </div>
            <div className="contentIsland mb-6">
                <MusicWorkInProgress />
            </div>
        </div>
    )
}