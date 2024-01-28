import { renderPlaylistHeaderTitle } from "./renderHeaderTitle.component.js";
import { renderPlaylistHeaderCover } from "./renderHeaderCover.component.js";

export function renderPlaylistHeader(playlistForRendering){
    renderPlaylistHeaderTitle(playlistForRendering)
    renderPlaylistHeaderCover(playlistForRendering)
}