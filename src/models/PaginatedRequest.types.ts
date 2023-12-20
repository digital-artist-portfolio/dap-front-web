import type { IMeta } from './Meta.types';

export interface IPaginatedRequest<T> {
	data: T[];
	meta: IMeta;
}
