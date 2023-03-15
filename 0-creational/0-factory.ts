/**
 * Solves: Creation of items without specifying concrete item.  Lowering high coupling.
 * How: Creating instances by type
 * Condition: Instances has to match the same interface
 */

type Platform = 'youtube' | 'twitch';

type Config = {
    channel: string;
    muted: boolean;
}

type Player = {
    url: string;
}

const createYoutubePlayer = (config: Config): Player => {
    const player = {
        url: `https://www.youtube.com/embed/${config.channel}?mute=${Number(config.muted)}`,
        // ... additional properties, methods
    }

    return player;
}

const createTwitchPlayer = (config: Config): Player => {
    const player = {
        url: `https://player.twitch.tv/?channel=${config.channel}&muted=${config.muted}`,
    }

    return player;
}


const playerFactory = (platform: Platform) => {

    const players: Record<Platform, (config: Config) => Player> = {
        youtube: createYoutubePlayer,
        twitch: createTwitchPlayer
    }

    return players[platform];
}

const youtubeCreator = playerFactory('youtube');
const twitchCreator = playerFactory('twitch');

const youtubePlayer = youtubeCreator({ channel: 'BBC News', muted: true })
const twitchPlayer = twitchCreator({ channel: 'Asmongold', muted: false })