// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Favorite documents */
type FavoriteDocumentData = Record<string, never>;
/**
 * Favorite document from Prismic
 *
 * - **API ID**: `favorite`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FavoriteDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FavoriteDocumentData>, "favorite", Lang>;
/** Content for Home Page documents */
interface HomePageDocumentData {
    /**
     * title field in *Home Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Thumbnail field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Project*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: project.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ProjectDocumentDataSlicesSlice>;
}
/**
 * Slice for *Project → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = SongSetSlice;
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Song documents */
interface SongDocumentData {
    /**
     * title field in *Song*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: song.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Song*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: song.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SongDocumentDataSlicesSlice>;
}
/**
 * Slice for *Song → Slice Zone*
 *
 */
type SongDocumentDataSlicesSlice = AudioListSlice | PerformanceHistorySlice | VideoSlice;
/**
 * Song document from Prismic
 *
 * - **API ID**: `song`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SongDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SongDocumentData>, "song", Lang>;
export type AllDocumentTypes = FavoriteDocument | HomePageDocument | ProjectDocument | SongDocument;
/**
 * Item in AudioList → Items
 *
 */
export interface AudioListSliceDefaultItem {
    /**
     * Title field in *AudioList → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: audio_list.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * audio field in *AudioList → Items*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: audio_list.items[].audio
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    audio: prismicT.LinkToMediaField;
}
/**
 * Default variation for AudioList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AudioList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AudioListSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<AudioListSliceDefaultItem>>;
/**
 * Slice variation for *AudioList*
 *
 */
type AudioListSliceVariation = AudioListSliceDefault;
/**
 * AudioList Shared Slice
 *
 * - **API ID**: `audio_list`
 * - **Description**: `AudioList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AudioListSlice = prismicT.SharedSlice<"audio_list", AudioListSliceVariation>;
/**
 * Item in PerformanceHistory → Items
 *
 */
export interface PerformanceHistorySliceDefaultItem {
    /**
     * Performance Date field in *PerformanceHistory → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: performance_history.items[].performance_date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    performance_date: prismicT.DateField;
    /**
     * Event Name field in *PerformanceHistory → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: performance_history.items[].event_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    event_name: prismicT.RichTextField;
}
/**
 * Default variation for PerformanceHistory Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PerformanceHistory`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PerformanceHistorySliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<PerformanceHistorySliceDefaultItem>>;
/**
 * Slice variation for *PerformanceHistory*
 *
 */
type PerformanceHistorySliceVariation = PerformanceHistorySliceDefault;
/**
 * PerformanceHistory Shared Slice
 *
 * - **API ID**: `performance_history`
 * - **Description**: `PerformanceHistory`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PerformanceHistorySlice = prismicT.SharedSlice<"performance_history", PerformanceHistorySliceVariation>;
/**
 * Primary content in SongSet → Primary
 *
 */
interface SongSetSliceDefaultPrimary {
    /**
     * Title field in *SongSet → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: song_set.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Composer field in *SongSet → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: song_set.primary.composer
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    composer: prismicT.RichTextField;
    /**
     * Language field in *SongSet → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: song_set.primary.language
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    language: prismicT.RichTextField;
    /**
     * Performance Duration field in *SongSet → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: song_set.primary.performance_duration
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    performance_duration: prismicT.RichTextField;
}
/**
 * Item in SongSet → Items
 *
 */
export interface SongSetSliceDefaultItem {
    /**
     * title field in *SongSet → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: song_set.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * link field in *SongSet → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: song_set.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Performance Duration field in *SongSet → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: song_set.items[].performance_duration
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    performance_duration: prismicT.RichTextField;
}
/**
 * Default variation for SongSet Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SongSet`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SongSetSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SongSetSliceDefaultPrimary>, Simplify<SongSetSliceDefaultItem>>;
/**
 * Slice variation for *SongSet*
 *
 */
type SongSetSliceVariation = SongSetSliceDefault;
/**
 * SongSet Shared Slice
 *
 * - **API ID**: `song_set`
 * - **Description**: `SongSet`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SongSetSlice = prismicT.SharedSlice<"song_set", SongSetSliceVariation>;
/**
 * Primary content in Video → Primary
 *
 */
interface VideoSliceDefaultPrimary {
    /**
     * Title field in *Video → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: video.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Embeded Id field in *Video → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: video.primary.embeded_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    embeded_id: prismicT.KeyTextField;
    /**
     * Start At field in *Video → Primary*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: video.primary.start_at
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    start_at: prismicT.NumberField;
}
/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Video`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<VideoSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Video*
 *
 */
type VideoSliceVariation = VideoSliceDefault;
/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: `Video`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoSlice = prismicT.SharedSlice<"video", VideoSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { FavoriteDocumentData, FavoriteDocument, HomePageDocumentData, HomePageDocument, ProjectDocumentData, ProjectDocumentDataSlicesSlice, ProjectDocument, SongDocumentData, SongDocumentDataSlicesSlice, SongDocument, AllDocumentTypes, AudioListSliceDefaultItem, AudioListSliceDefault, AudioListSliceVariation, AudioListSlice, PerformanceHistorySliceDefaultItem, PerformanceHistorySliceDefault, PerformanceHistorySliceVariation, PerformanceHistorySlice, SongSetSliceDefaultPrimary, SongSetSliceDefaultItem, SongSetSliceDefault, SongSetSliceVariation, SongSetSlice, VideoSliceDefaultPrimary, VideoSliceDefault, VideoSliceVariation, VideoSlice };
    }
}
