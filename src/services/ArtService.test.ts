import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

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

	describe('Test getArtById', () => {
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
			await ArtService.getArtById({ id: 0 });
			expect(spy).toBeCalledTimes(1);
		});

		it('should call the api with the correct params', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await ArtService.getArtById({ id: 0 });
			expect(spy).toHaveBeenCalledWith('/arts/0', {
				params: { populate: 'image' }
			});
		});

		it('should return the mocked value', async () => {
			const result = await ArtService.getArtById({ id: 0 });
			expect(result).toStrictEqual(response.data);
		});
	});
});
