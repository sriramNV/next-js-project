async function Home() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!res.ok) throw new Error("Unable to fetch data");

    const albums = await res.json();

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
            {albums.map((album: {id: number, title: string}) => (
                <div
                    key = {album.id}
                    className="bg-white shadow-md rounded-lg p-8 m-4"
                >
                <h3 className="text-lg font-bold mb-2 text-black">{album.title}</h3>
                <p className="text-black">Album ID: {album.id}</p>
            </div>
            ))}
        </div>
    );
}

export default Home;