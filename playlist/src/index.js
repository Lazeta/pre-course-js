import { playlists } from "./data.module.js"
// import { renderPlaylists } from "./components/renderPlaylists.component.js";
// console.log('[4 stage] index js file work!')

renderPlaylists(playlists)

function renderPlaylists(inputPlaylists){
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        renderPlaylist(playlist);
    }
}

function renderPlaylist(playlistForRendering){
    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering.tracks);
}

function renderPlaylistHeader(playlistForRendering){
    renderPlaylistHeaderTitle(playlistForRendering)
    renderPlaylistHeaderCover(playlistForRendering)
}

function renderPlaylistHeaderTitle(playlistForRendering) {
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}

function renderPlaylistHeaderCover(playlistForRendering) {
    const coverElement = document.createElement('img');
    coverElement.src = playlistForRendering.coverUrl;
    coverElement.style = "border: 3px solid black";
    document.body.append(coverElement)
}

function renderPlaylistTracks(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]
        renderPlaylistTrack(track);
    }
}
function renderPlaylistTrack(inputTrackForRendering) {
    const trackElement = document.createElement('div');

    const coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverUrlTrack;
    coverElement.style = "border: 2px solid gray";
    trackElement.append(coverElement);

    const trackTitleElement = document.createElement('div');
    
    if (inputTrackForRendering.isHit) {
        trackTitleElement.append('🔥')
    }

    trackTitleElement.append(inputTrackForRendering.executor + " - " + inputTrackForRendering.titleTrack)
    trackElement.append(trackTitleElement);
    trackElement.style.padding = "5px";

    const audioElement = document.createElement('audio');
    audioElement.src = inputTrackForRendering.fileUrl;
    audioElement.controls = true;
    trackElement.append(audioElement);

    document.body.append(trackElement)
}
console.log('finish')