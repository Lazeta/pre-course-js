export function renderPlaylistTrack(inputTrackForRendering) {
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