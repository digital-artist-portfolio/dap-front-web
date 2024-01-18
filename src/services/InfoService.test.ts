import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import {
	InfoService,
	type TGetAboutRes,
	type TGetBasicInfoRes,
	type TGetLocalesRes
} from './InfoService';
import cmsApi from './cmsApi';

describe('Test InfoService', () => {
	describe('Test getLocales', () => {
		const response = {
			data: [
				{ code: 'code1', id: 0, isDefault: true, name: 'name1' },
				{ code: 'code2', id: 1, isDefault: false, name: 'name2' }
			] satisfies TGetLocalesRes
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
			await InfoService.getLocales();
			expect(spy).toBeCalledTimes(1);
		});

		it('should call the api with the correct url', async () => {
			const spy = vi.spyOn(cmsApi, 'get');
			await InfoService.getLocales();
			expect(spy).toHaveBeenCalledWith('/i18n/locales');
		});

		it('should return the mocked value', async () => {
			const result = await InfoService.getLocales();
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
