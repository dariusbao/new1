module.exports = {
    app: {
        px: '!',
        token: 'OTIxNzAxMDczNjAzOTMyMTYw.Yb2vBA.3OuqRSWxMzDiRpCoYZd10ykchT4',
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
