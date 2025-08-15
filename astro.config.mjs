// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightChangelogs, { makeChangelogsSidebarLinks } from "starlight-changelogs";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "My Docs",
			plugins: [starlightChangelogs(), starlightLinksValidator()],
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "Changelogs",
					items: [...makeChangelogsSidebarLinks([{ type: "recent", base: "changelog" }])],
				},
			],
		}),
	],
});
