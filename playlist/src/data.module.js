export const playlist = {
    title: 'Hot hits 2000 years',
    coverUrl: './img/coverHeader',
    info: {
        totalTracksCount: 10,
        totalTracksDuration: 1850,
    },
    tracks: [
        {
            titleTrack: 'Sonne',
            executor: 'Rammstein',
            fileUrl: './song/50_Cent_-_Candy_Shop_(Feat._Olivia).mp3',
            coverUrlTrack: './img/Sonne.jpg',
            years: '2001',
            isHit: 'true',
        },
        {
            titleTrack: 'Du hast',
            executor: 'Rammstein',
            fileUrl: './song/50_Cent_-_In_Da_Club.mp3',
            coverUrlTrack: './img/Du_hast.jpg',
            years: '1997',
            isHit: 'false',
        },
        {
            titleTrack: 'Deutschland',
            executor: 'Rammstein',
            fileUrl: './song/50_Cent_feat._2Pac_-_G.A.N.G.S.T.A.mp3',
            coverUrlTrack: './img/Deutschland.jpg',
            years: '2019',
            isHit: 'true',
        },
    ],
}
console.log('[1 stage] data loaded');