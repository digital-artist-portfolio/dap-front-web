import type { IArt, IPaginatedRequest, ICmsRequest } from '../models';
import cmsApi from './cmsApi';

export class ArtService {
	static async getArts() {
		const url = '/arts';
		const { data } = await cmsApi.get<IGetArtsRes>(url, {
			params: {
				populate: 'Image',
				sort: 'createdAt:desc'
			}
		});

		return data;
	}

	static async getArtById({ id }: IGetArtByIdParams) {
		const url = `/arts/${id}`;
		const { data } = await cmsApi.get<IGetArtByIdRes>(url, {
			params: {
				populate: ['Image', 'next', 'previous']
			}
		});

		return data;
	}
}

export interface IGetArtsRes extends IPaginatedRequest<IArt> {}

export interface IGetArtByIdParams {
	id: number;
}

export interface IGetArtByIdRes extends ICmsRequest<IArt> {}
