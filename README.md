# Yichao Zhao

An English personal academic website built with the official [al-folio](https://github.com/alshedivat/al-folio) starter and hosted on GitHub Pages.

Website: [yzl884.github.io/YichaoZhao](https://yzl884.github.io/YichaoZhao/)

The initial version contains five pages. The biography, photo, research details, publications, and teaching materials will be added when provided.

| Page                    | Content file                                                 |
| ----------------------- | ------------------------------------------------------------ |
| Home                    | `_pages/about.md`                                            |
| Research                | `_pages/research.md`                                         |
| Publications            | `_pages/publications.md` and `_bibliography/yichao-zhao.bib` |
| Conferences             | `_pages/conferences.md`                                      |
| Teaching and Mentorship | `_pages/teaching.md`                                         |

Site metadata and feature settings live in `_config.yml`. Public contact links live in `_data/socials.yml`.

## Publishing updates

Changes pushed to `main` run the **Deploy site** workflow. It validates the site, builds Jekyll, and publishes the output to `gh-pages`. GitHub Pages serves the root of that branch.

The project site uses `url: https://yzl884.github.io` and `baseurl: /YichaoZhao`. Keep both values aligned with the repository name.

## Template and local development

The al-folio runtime and visual design are provided by the official versioned gems pinned in `Gemfile`. No local layout or stylesheet overrides have been added. Unused template demo content is excluded from the published site and can be enabled later if needed.

See [installation instructions](docs/INSTALL.md) and [customization instructions](docs/CUSTOMIZE.md) for local development and additional features. The upstream [MIT license](LICENSE) is retained.
