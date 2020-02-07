// all ations related to setting up client library, action creator
import {createAction} from './index';

export const YOUTUBE_LIBRARY_LOADED  = 'YOUTUBE_LIBRARY_LOADED';
export const youtubeLibraryLoaded = createAction.bind(null, YOUTUBE_LIBRARY_LOADED)