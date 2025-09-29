module.exports = {
  title: 'Ashty Hamid - Software Engineer',
  description: 'Professional CV and Portfolio',
  base: '/my-vuepress-site/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Experience', link: '/experience/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' }
    ],
    
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    searchMaxSuggestions: 10
  }
}
