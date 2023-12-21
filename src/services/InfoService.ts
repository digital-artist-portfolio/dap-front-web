import type { IInfo, ILocale } from '$models';
import type { IAbout } from '$models/About.types';
import type { ICmsRequest, ILocalizedParams } from '$types';

import cmsApi from './cmsApi';

export class InfoService {
	static async getLocales() {
		const url = '/i18n/locales';
		const { data } = await cmsApi.get<TGetLocalesRes>(url);
		return data;
	}

	static async getBasicInfo(params?: IGetBasicInfoParams) {
		const url = '/slogan';
		const { data } = await cmsApi.get<TGetBasicInfoRes>(url, {
			params: { locale: params?.locale }
		});
		return data;
	}

	static async getAbout(params?: IGetAboutParams) {
		const url = '/about';
		const { data } = await cmsApi.get<TGetAboutRes>(url, { params: { locale: params?.locale } });
		return data;
	}
}

/* Types */
export interface IGetBasicInfoParams extends ILocalizedParams {}

export type TGetLocalesRes = ILocale[];

export type TGetBasicInfoRes = ICmsRequest<IInfo>;

export interface IGetAboutParams extends ILocalizedParams {}

export type TGetAboutRes = ICmsRequest<IAbout>;
