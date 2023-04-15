import TweeterEmbed from "./(components)/tweeterEmbed"

export default function Home() {
    return (
        <div className="animate-fadeInLeft">
            <div className="contentIsland mb-6">
                <h2 className="font-black italic text-4xl mb-3">Last release</h2>
                <iframe
                    src="https://open.spotify.com/embed/track/3ctp1bMufoPBn7YhR31kQU?utm_source=generator"
                    allow="encrypted-media" width="100%" height="152"></iframe>
            </div>
            <div className="contentIsland mb-6">
                <h2 className="font-black italic text-4xl mb-3">Stay connected</h2>
                <div className="bg-slvv60 bg-opacity-50 rounded-xl">
                    <TweeterEmbed />
                </div>
            </div>
        </div>
    )
}