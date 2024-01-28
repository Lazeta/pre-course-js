import { renderPlaylistHeader } from "./header/renderHeader.component.js";
// import { renderPlaylistTracks } from "./tracks/renderTracks.component.js";

export function renderPlaylist(playlistForRendering){
    console.log('[6 stage] function renderPlaylist is work')
    renderPlaylistHeader(playlistForRendering);
    // renderPlaylistTracks(playlistForRendering.tracks);
}
console.log('[2 stage] renderPlaylist work')