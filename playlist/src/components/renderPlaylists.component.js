import { renderPlaylist } from "./renderPlaylist.component.js";
console.log('[3 stage] renderPlaylists join')


export function renderPlaylists(inputPlaylists){
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        renderPlaylist(playlist);
    }
}