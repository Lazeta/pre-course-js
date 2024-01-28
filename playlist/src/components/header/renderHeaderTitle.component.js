export function renderPlaylistHeaderTitle(playlistForRendering) {
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}