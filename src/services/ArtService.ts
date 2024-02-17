import type { IArt } from '$models';
import type { ICmsRequest, IPaginatedRequest } from '$types';
import cmsApi from './cmsApi';

export class ArtService {
	static async getArts() {
		const url = '/arts';
		const { data } = await cmsApi.get<IGetArtsRes>(url, {
			params: {
				populate: 'image',
				sort: 'createdAt:desc'
			}
		});

		return data;
	}

	static async getArtById({ id }: IGetArtByIdParams) {
		const url = `/arts/${id}`;
		const { data } = await cmsApi.get<IGetArtByIdRes>(url, {
			params: {
				populate: 'image'
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
