import VisualsColors from "./(components)/visualsColors"
import VisualsFont from "./(components)/visualsFont"
import VisualsBanner from "./(components)/visualsBanner"
import VisualsProfilePicture from "./(components)/visualsProfilePicture"

export default function Visuals() {
    return (
        <div className="animate-fadeInLeft">
            <div className="flex flex-row gap-6">
                <div className="contentIsland mb-6">
                <VisualsColors />
                </div>

                <div className="contentIsland mb-6">
                <VisualsFont />
                </div>
            </div>
            
            <div className="contentIsland mb-6">
                <VisualsBanner />
            </div>

            <div className="contentIsland mb-6">
                <VisualsProfilePicture />
            </div>
        </div>
    )
}