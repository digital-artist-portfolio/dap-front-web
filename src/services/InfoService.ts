import type { ICmsRequest, IInfo, ILocale } from '$models';

import cmsApi from './cmsApi';

export class InfoService {
	static async getLocales() {
		const url = '/i18n/locales';
		const { data } = await cmsApi.get<TGetLocalesRes>(url);
		return data;
	}

	static async getBasicInfo() {
		const url = '/slogan';
		const { data } = await cmsApi.get<TGetBasicInfoRes>(url);
		return data;
	}
}

/* Types */
export type TGetLocalesRes = ILocale[];

export type TGetBasicInfoRes = ICmsRequest<IInfo>;
