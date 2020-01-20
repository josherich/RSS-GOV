const pinyin = require('pinyin');
const { slugify: _slugify } = require('@vuepress/shared-utils');

module.exports = {
    title: 'RSS ORG',
    description: '专注于组织部门 RSS',
    plugins: {
        '@vuepress/google-analytics': {
            ga: 'UA-29751795-6',
        },
        '@vuepress/pwa': {
            serviceWorker: true
        },
        '@vuepress/back-to-top': true,
    },
    markdown: {
        slugify: function(s) {
            return _slugify(
                pinyin(s, {
                    style: pinyin.STYLE_NORMAL,
                    heteronym: true,
                    segment: true,
                })
                    .map((item) => item[0])
                    .join('-')
            );
        },
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#',
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff8549' }],
    ],
    themeConfig: {
        repo: 'josherich/RSS-ORG',
        editLinks: true,
        docsDir: 'docs',
        smoothScroll: true,
        algolia: {
            apiKey: '6c037589f64d3aadc5cd228e07f3248a',
            indexName: 'rssorg',
            algoliaOptions: {
                hitsPerPage: 14,
            },
        },
        locales: {
            '/': {
                lang: 'zh-CN',
                selectText: 'Languages',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '指南',
                        link: '/',
                    },
                    {
                        text: '参与',
                        link: '/joinus/',
                    },
                    {
                        text: '支持',
                        link: '/support/',
                    },
                    {
                        text: 'Context-News',
                        link: 'https://news.mindynode.com',
                    },
                ],
                sidebar: {
                    '/': [
                        {
                            title: '指南',
                            collapsable: true,
                            children: ['', 'api', 'context'],
                        },
                        {
                            title: '路由',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                'state-org',
                                'state-council',
                                'others',
                                'todos',
                            ],
                        },
                    ],
                },
            },
        },
    },
};
