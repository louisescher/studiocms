import { defineDb } from 'astro:db';
import {
	StudioCMSPageContent,
	StudioCMSPageData,
	StudioCMSPermissions,
	StudioCMSSiteConfig,
	StudioCMSUsers,
	StudioCMSSessions,
	PageContent,
	PageData,
	Permissions,
	SiteConfig,
	User,
	sessionTable,
} from './tables';

// https://astro.build/db/config
export default defineDb({
	tables: {
		StudioCMSPageContent,
		StudioCMSPageData,
		StudioCMSPermissions,
		StudioCMSSiteConfig,
		StudioCMSUsers,
		StudioCMSSessions,

		// deprecated
		SiteConfig,
		sessionTable,
		User,
		Permissions,
		PageData,
		PageContent,
	},
});
