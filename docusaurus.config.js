const EDIT_URL = 'https://github.com/tfisicaro/docs/edit/main/';

module.exports = {
    title: 'tfisicaro.dev',
    tagline: '// TODO: Enter a tagline.',
    url: 'https://docs.tfisicaro.dev',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    projectName: 'tfdocs',
    noIndex: true,
    customFields: {
        editUrl: EDIT_URL,
        enableUpdateBy: true,
        enableUpdateTime: true,
    },
    themeConfig: {
        metadata: [{ name: 'keywords', content: 'tech, blog, docusaurus, tfisicaro, github' }],
        prism: {
            additionalLanguages: [
                'markdown',
                'git',
                'powershell',
                'csharp',
                'python',
                'javascript',
                'jsx',
                'typescript',
            ],
        },
        navbar: {
            title: 'tfisicaro.dev',
            // logo: {
            //     alt: 'Logo',
            //     src: 'img/mstile-150x150.png',
            // },
            hideOnScroll: true,
            items: [
                { to: 'notes', label: 'Notes', position: 'left' },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    label: 'Privacy',
                    docId: 'privacy',
                    to: '/privacy',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            defaultMode: 'light',
            respectPrefersColorScheme: true,
        },
        footer: {
            style: 'light',
            copyright: `Copyright © ${new Date().getFullYear()} - Tim Fisicaro`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'notes',
                    routeBasePath: '/notes',
                    editUrl: EDIT_URL,
                    include: ['**/*.md', '**/*.mdx'],
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    routeBasePath: '/blog',
                    blogTitle: 'Docusaurus blog!',
                    blogDescription: 'A Docusaurus powered blog!',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    readingTime: ({ content, frontMatter, defaultReadingTime }) =>
                        defaultReadingTime({ content, options: { wordsPerMinute: 200 } }),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'G-YR23FMRR7P',
                    anonymizeIP: false,
                },
            },
        ],
    ],
    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                docsDir: 'docs',
                blogDir: 'blogs',
            },
        ],
    ],
};
