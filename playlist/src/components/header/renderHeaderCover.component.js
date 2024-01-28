export function renderPlaylistHeaderCover(playlistForRendering) {
    const coverElement = document.createElement('img');
    coverElement.src = playlistForRendering.coverUrl;
    coverElement.style = "border: 3px solid black";
    document.body.append(coverElement)
}