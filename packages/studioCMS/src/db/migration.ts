import {
  db,

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
} from 'astro:db';

export async function seed() {
  try {
    const config = await db.select().from(StudioCMSSiteConfig).get()
    console.log(config)
    if (config) return
  } catch {
    console.log('nope')
  }
}
