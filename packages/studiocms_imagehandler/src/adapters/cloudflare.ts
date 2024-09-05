import { integrationLogger } from '@matthiesenxyz/integration-utils/astroUtils';
import { StudioCMSOptionsSchema as optionsSchema } from '@studiocms/core/schemas';
import { cloudflareImageHandlerStrings } from '@studiocms/core/strings';
import { defineIntegration } from 'astro-integration-kit';
import { passthroughImageService } from 'astro/config';
import { name as packageName } from '../../package.json';

export default defineIntegration({
	name: `${packageName}:cloudflare`,
	optionsSchema,
	setup({ options }) {
		return {
			hooks: {
				'astro:config:setup': async (params) => {
					const { updateConfig, config, logger } = params;

					const {
						imageService: { astroImageServiceConfig, cdnPlugin },
						verbose,
					} = options;

					// Setup Image Service
					if (config.image?.service.entrypoint === '@astrojs/cloudflare/image-service') {
						integrationLogger(
							{ logger, logLevel: 'info', verbose },
							cloudflareImageHandlerStrings.CloudflareImageServiceEnabled
						);
					} else {
						integrationLogger(
							{ logger, logLevel: 'info', verbose },
							cloudflareImageHandlerStrings.CloudflareImageServiceDisabled
						);
						if (cdnPlugin === 'cloudinary-js') {
							if (astroImageServiceConfig === 'sharp') {
								integrationLogger(
									{ logger, logLevel: 'info', verbose },
									cloudflareImageHandlerStrings.cdnPluginStrings.Sharp
								);
								updateConfig({
									image: { service: passthroughImageService() },
								});
							} else if (astroImageServiceConfig === 'no-op') {
								integrationLogger(
									{ logger, logLevel: 'info', verbose },
									cloudflareImageHandlerStrings.cdnPluginStrings.NoOp
								);
								updateConfig({
									image: { service: passthroughImageService() },
								});
							}
						} else {
							integrationLogger(
								{ logger, logLevel: 'info', verbose },
								cloudflareImageHandlerStrings.unpicStrings.disabled
							);
							if (astroImageServiceConfig === 'sharp') {
								integrationLogger(
									{ logger, logLevel: 'info', verbose },
									cloudflareImageHandlerStrings.unsupported.Sharp
								);
								updateConfig({
									image: { service: passthroughImageService() },
								});
							} else if (astroImageServiceConfig === 'no-op') {
								integrationLogger(
									{ logger, logLevel: 'info', verbose },
									cloudflareImageHandlerStrings.NoOp
								);
								updateConfig({
									image: { service: passthroughImageService() },
								});
							}
						}
					}
				},
			},
		};
	},
});
