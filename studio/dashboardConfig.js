export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624e06335b3866100ca24e50',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iuttxzwu',
                  apiId: '882eb17f-476c-4e74-bf32-c47dbf66a4f0'
                },
                {
                  buildHookId: '624e06335b370211c6728cc1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dserf7je',
                  apiId: 'd09f3af4-1652-431d-88a6-d1492b8b4717'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olbrown/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dserf7je.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
