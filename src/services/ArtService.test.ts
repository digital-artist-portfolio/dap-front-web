import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { InfoService, type TGetAboutRes, type TGetBasicInfoRes } from './InfoService';
import cmsApi from './cmsApi';
import { ArtService } from './ArtService';

describe('Test ArtService', () => {
	describe('Test getArts', () => {
		const response = { data: 'resp' };

		beforeEach(() => {
			const mockedRequest = vi.spyOn(cmsApi, 'get');
			mockedRequest.mockResolvedValue(response);
		});

		afterEach(() => {
			vi.resetAllMocks();
		});

		it('should call the api exactly one time', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await ArtService.getArts();
			expect(spy).toBeCalledTimes(1);
		});

		it('should call the api with the correct params', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await ArtService.getArts();
			expect(spy).toHaveBeenCalledWith('/arts', {
				params: { populate: 'image', sort: 'createdAt:desc' }
			});
		});

		it('should return the mocked value', async () => {
			const result = await ArtService.getArts();
			expect(result).toStrictEqual(response.data);
		});
	});

	describe('Test getBasicInfo', () => {
		const response = {
			data: {
				data: {
					id: 0,
					attributes: {
						dev: 'devname',
						email: 'whatever@what.com',
						slogan: 'slogan',
						locale: 'locale',
						role: 'role',
						instagram: 'instagram',
						linkedin: 'linkedin',
						title: 'title'
					}
				}
			} satisfies TGetBasicInfoRes
		};

		beforeEach(() => {
			const mockedRequest = vi.spyOn(cmsApi, 'get');
			mockedRequest.mockResolvedValue(response);
		});

		afterEach(() => {
			vi.resetAllMocks();
		});

		it('should call the api exactly one time', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await InfoService.getBasicInfo();
			expect(spy).toBeCalledTimes(1);
		});

		it('should call the api with the correct params', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await InfoService.getBasicInfo({ locale: 'pt-BR' });
			expect(spy).toHaveBeenCalledWith('/slogan', { params: { locale: 'pt-BR' } });
		});

		it('should return the mocked value', async () => {
			const result = await InfoService.getBasicInfo();
			expect(result).toStrictEqual(response.data);
		});
	});

	describe('Test getAbout', () => {
		const response = {
			data: {
				data: {
					id: 0,
					attributes: {
						text: 'text'
					}
				}
			} satisfies TGetAboutRes
		};

		beforeEach(() => {
			const mockedRequest = vi.spyOn(cmsApi, 'get');
			mockedRequest.mockResolvedValue(response);
		});

		afterEach(() => {
			vi.resetAllMocks();
		});

		it('should call the api exactly one time', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await InfoService.getAbout();
			expect(spy).toBeCalledTimes(1);
		});

		it('should call the api with the correct params', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await InfoService.getAbout({ locale: 'pt-BR' });
			expect(spy).toHaveBeenCalledWith('/about', { params: { locale: 'pt-BR' } });
		});

		it('should return the mocked value', async () => {
			const result = await InfoService.getAbout();
			expect(result).toStrictEqual(response.data);
		});
	});
});
