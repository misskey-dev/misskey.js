import { ID, Instance, Note, OriginType, User, UserSorting } from './types';

type TODO = Record<string, any>;

type ShowUserReq = { username: string; host?: string; } | { userId: ID; };

export type Endpoints = {
	'i': { req: TODO; res: User; };
	'meta': { req: { detail?: boolean; }; res: Instance; };

	'users': { req: { limit?: number; offset?: number; sort?: UserSorting; origin?: OriginType; }; res: User[]; };
	'users/show': { req: ShowUserReq; res: User; } | { req: { userIds: ID[]; }; res: User[]; };

	'notes': { req: { limit?: number; sinceId?: ID; untilId?: ID; }; res: Note[]; };
	'notes/create': { req: TODO; res: { createdNote: Note }; };
	'notes/delete': { req: { noteId: ID; }; res: null; };
	'notes/show': { req: { noteId: ID; }; res: Note; };
};
