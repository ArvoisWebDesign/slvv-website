import AboutMe from "./(components)/aboutMe"
import AboutWebsite from "./(components)/aboutWebsite"

export default function About() {
    return (
        <div className="animate-opacity">
            <div className="contentIsland mb-6">
                <AboutMe />
            </div>
            
            <div className="contentIsland mb-6">
                <AboutWebsite />
            </div>
        </div>
    )
}