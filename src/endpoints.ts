import { ID, Instance, Note, OriginType, ServerInfo, Stats, User, UserSorting } from './types';

type TODO = Record<string, any>;

type ShowUserReq = { username: string; host?: string; } | { userId: ID; };

export type Endpoints = {
	// admin

	// announcements

	// antennas
	'antennas/create': { req: TODO; res: TODO; };

	// ap

	// app

	// auth

	// blocking

	// channnels

	// charts

	// clips

	// drive

	// federation

	// following

	// gallery

	// games

	// get-online-users-count

	// hashtags

	// i
	'i': { req: TODO; res: User; };

	// messaging

	// meta
	'meta': { req: { detail?: boolean; }; res: Instance; };

	// miauth

	// mute

	// my

	// notes
	'notes': { req: { limit?: number; sinceId?: ID; untilId?: ID; }; res: Note[]; };
	'notes/create': { req: TODO; res: { createdNote: Note }; };
	'notes/delete': { req: { noteId: ID; }; res: null; };
	'notes/show': { req: { noteId: ID; }; res: Note; };

	// notifications

	// page-push

	// pages

	// ping

	// pinned-users

	// promo

	// request-reset-password

	// reset-password
	'reset-password': { req: { token: string; password: string; }; res: null; };

	// room

	// stats
	'stats': { req: null; res: Stats; };

	// server-info
	'server-info': { req: null; res: ServerInfo; };

	// sw

	// username

	// users
	'users': { req: { limit?: number; offset?: number; sort?: UserSorting; origin?: OriginType; }; res: User[]; };
	'users/show': { req: ShowUserReq; res: User; } | { req: { userIds: ID[]; }; res: User[]; };
};
