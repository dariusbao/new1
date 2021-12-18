module.exports = {
    app: {
        px: '!',
        token: 'OTIxNzAxMDczNjAzOTMyMTYw.Yb2vBA.4tIpe4S69edd3r7Y2hdEBQ_qwfs',
        playing: 'Test'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
