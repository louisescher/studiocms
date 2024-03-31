import { z } from 'astro/zod';
import type { CdnOptions, ImageCdn } from 'unpic';

//
// Custom Types used for `z.custom`
//
type UnpicFallbackServiceOptions = ImageCdn | 'sharp' | 'squoosh';
type UnpicPlaceHolder = 'blurhash' | 'dominantColor' | 'lqip' | (string & {});
type UnpicLayout = 'constrained' | 'fixed' | 'fullWidth';
type AstroImageService = 'sharp' | 'squoosh' | 'no-op';
type cdnImageServicePlugin = 'cloudinary-js';

//
// UNPIC CONFIG OPTIONS SCHEMA
//
export const unpicConfigSchema = z
	.object({
		/**
		 * The image service to use for local images and when the CDN can't be
		 * determined from the image src. Value can be any supported image CDN,
		 * or "sharp" or "squoosh" to use the local image service.
		 * By default it will either use the local "squoosh" service, or will
		 * try to detect available services based on the environment.
		 * This detection currently works on Netlify and Vercel.
		 *
		 * Falls back to the value of `astroImageServiceConfig` if not set here
		 */
		fallbackService: z.custom<UnpicFallbackServiceOptions>().optional(),
		/**
		 * The default placeholder background to use for images.
		 * Can be `"blurhash"`, `"dominantColor"`, `"lqip"`, a data URI or a CSS color string.
		 * Local images don't support `"blurhash"`, `"dominantColor"` or `"lqip"`, and will
		 * not include a background unless a data URI or CSS color string is provided.
		 * Default is no background.
		 * Note that because the element uses no Javascript, the background will not
		 * be removed when the image loads, so you should not use it for images that
		 * have transparency.
		 *
		 * @see https://unpic.pics/placeholder
		 * @default "blurhash"
		 */
		placeholder: z.custom<UnpicPlaceHolder>().optional().default('blurhash'),
		/**
		 * The default layout to use for images. Defaults to "constrained".
		 * @see https://unpic.pics/img/learn/#layouts
		 * @default "constrained"
		 */
		layout: z.custom<UnpicLayout>().optional().default('constrained'),
		/**
		 * CDN-specific options.
		 */
		cdnOptions: z.custom<CdnOptions>().optional().default({}),
	})
	.optional()
	.default({});

//
// IMAGE SERVICE SCHEMA
//
export const imageServiceSchema = z
	.object({
		/**
		 * OPTIONAL - Allows the user to enable/disable the use of the `@unpic/astro` image optimization service for external images
		 * @default true
		 */
		useUnpic: z.boolean().optional().default(true),
		/**
		 * OPTIONAL - Allows the user to customize the `@unpic/astro` image optimization service
		 */
		unpicConfig: unpicConfigSchema,
		/**
		 * If the user wants to disable the `@unpic/astro` image service, they can specify their desired Astro Built-in Image Service using this option.
		 *
		 * Note: This option is only used if `useUnpic` is set to `false`
		 * @default "squoosh"
		 */
		astroImageServiceConfig: z.custom<AstroImageService>().optional().default('squoosh'),
		/**
		 * If the user wants to use a custom Supported CDN Plugin, they can specify it here.
		 *
		 * Currently Supported CDN Plugins: **cloudinary-js**
		 *
		 * Note: Enabling this option will disable the use of the `@unpic/astro` image service for external images. For local images and Fallback, the `astroImageServiceConfig` will be used.
		 */
		cdnPlugin: z.custom<cdnImageServicePlugin>().optional(),
	})
	.optional()
	.default({});
