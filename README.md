# Yichao Zhao

An English personal academic website built with the official [al-folio](https://github.com/alshedivat/al-folio) starter and hosted on GitHub Pages.

Website: [www.yichaozhao.com](https://www.yichaozhao.com/)

The site contains four main pages. Published journal articles, conference contributions, and selected media coverage have been populated from the supplied CV. The full CV and personal contact information are not included in the published files.

| Page               | Content file                                                 |
| ------------------ | ------------------------------------------------------------ |
| Home               | `_pages/about.md`                                            |
| Research           | `_pages/research.md` and `_data/conferences.json`            |
| Publications       | `_pages/publications.md` and `_bibliography/yichao-zhao.bib` |
| Beyond the Science | `_pages/teaching.md`                                         |

Site metadata and feature settings live in `_config.yml`. Public contact links live in `_data/socials.yml`.

Home uses the supplied biography, research overview, and headshot at `assets/img/Yichao_Zhao.jpg`. Research includes Talks & Conferences. Publications displays media coverage immediately beneath each relevant paper using the bibliography's native `note` field. Beyond the Science is for teaching, mentorship, and other interests. Previous activity, conference, press, and teaching URLs redirect to their current pages or sections.

The Publications page uses standard section and paper anchors. The optional bibliography filter is disabled because it treats every URL fragment as a search query, which conflicts with these links. Site-wide search is disabled.

## Publishing updates

Changes pushed to `main` run the **Deploy site** workflow. It validates the site, builds Jekyll, and publishes the output to `gh-pages`. GitHub Pages serves the root of that branch.

The site uses `url: https://www.yichaozhao.com` and an empty `baseurl` so pages and assets are served at the custom domain's root. The root `CNAME` file preserves this domain through deployments. DNS is managed in Squarespace; GitHub Pages hosts the site.

## Template and local development

The al-folio runtime and visual design are provided by the official versioned gems pinned in `Gemfile`. No local layout or stylesheet overrides have been added. Unused template demo content is excluded from the published site and can be enabled later if needed.

See [installation instructions](docs/INSTALL.md) and [customization instructions](docs/CUSTOMIZE.md) for local development and additional features. The upstream [MIT license](LICENSE) is retained.
