import fileFactory from '@matthiesenxyz/integration-utils/fileFactory';
import { createResolver } from 'astro-integration-kit';

const { resolve } = createResolver(import.meta.url);

const authHelperDTS = fileFactory();

authHelperDTS.addLines('// This file is generated by StudioCMS\n\n');

authHelperDTS.addLines(`declare module 'studiocms:auth/helpers' {`);

authHelperDTS.addLines(`
	/**
	 * # Auth Helper Function
	 *
	 * @param locals The Astro.locals object
	 * @returns The current user data and session information
	 *
	 * @example
	 * ---
	 * import { authHelper } from 'studiocms:auth/helpers'
	 *
	 * const { id, username, name, email, avatar, githubURL, permissionLevel, currentUserSession } = await authHelper(Astro.locals)
	 * ---
	 */
	export const authHelper: typeof import('${resolve('../helpers/authHelper.ts')}').default;`);

authHelperDTS.addLines('}');

const DTSFile = authHelperDTS.text();

export default DTSFile;
