import { renderPlaylist } from "./renderPlaylist.component.js";
console.log('[3 stage] renderPlaylists join')

export function renderPlaylists(inputPlaylist){
    for (let i = 0; i < inputPlaylist.length; i++){
        const playlist = inputPlaylist[i];
        renderPlaylist(playlist);
    }
    console.log('[5 stage] function renderPlaylists is work')
}