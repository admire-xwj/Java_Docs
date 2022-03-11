module.exports = {
    title: 'Java知识',
    description: 'Java知识',
    dest: './dist',
    port: '8080',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 0,    //侧边栏深度
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 !',
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                //导航栏
                nav: [
                    {
                        text: 'Java',
                        items: [
                            {text: 'JVM', link: '/md/java/jvm/java-jvm.md'},
                        ]
                    },
                ],
                //侧边到航
                sidebar: {
                    "/md/java/": genSidebarForJava(),
                }
			}
		}	
    },
	plugins: [
            require('./plugin.js')
        ]
}

// java page
function genSidebarForJava(){
    return [
        {
            title: "JVM",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "jvm/java-jvm.md",
                "jvm/java-jvm-01.md",
            ]
        }
    ];
}


