import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gestão de Patrimônio",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/01-Documentação de Contexto' }
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: 'Documentação de Contexto', link: '/01-Documentação de Contexto' },
          { text: 'Especificação do projeto', link: '/02-Especificação do Projeto' },
          { text: 'Metodologia', link: '/03-Metodologia'},
          { text: 'Projeto de Interface', link: '/04-Projeto de Interface'},
          { text: 'Arquitetura da Solução', link: '/05-Arquitetura da Solução'},
          { text: 'Template Padrão da Solução', link: '/06-Template Padrão da Solução'},
          { text: 'Programação de Funcionalidades', link: '/07-Programação de Funcionalidades'},
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
