// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'pt-BR'

export type Locales =
	| 'en'
	| 'pt-BR'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * c​o​n​t​a​c​t
	 */
	contact: string
	footer: {
		/**
		 * c​o​n​t​a​t​o
		 */
		contact: string
		/**
		 * f​o​l​l​o​w
		 */
		follow: string
	}
}

export type TranslationFunctions = {
	/**
	 * contact
	 */
	contact: () => LocalizedString
	footer: {
		/**
		 * contato
		 */
		contact: () => LocalizedString
		/**
		 * follow
		 */
		follow: () => LocalizedString
	}
}

export type Formatters = {}