import TwitterEmbed from "./(components)/twitterEmbed"

export default function Home() {
    return (
        <div className="animate-opacity">
            <div className="contentIsland mb-6">
                <h2 className="font-black italic text-4xl mb-3">Last release</h2>
                <iframe
                    src="https://open.spotify.com/embed/track/3ctp1bMufoPBn7YhR31kQU?utm_source=generator"
                    allow="encrypted-media" width="100%" height="152" title="Spotify embed"></iframe>
            </div>
            <div className="contentIsland mb-6">
                <h2 className="font-black italic text-4xl mb-3">Stay connected</h2>
                <div className="bg-slvv60 bg-opacity-50 rounded-2xl">
                    <TwitterEmbed />
                </div>
            </div>
        </div>
    )
}