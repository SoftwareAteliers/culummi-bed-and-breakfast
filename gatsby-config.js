module.exports = {
  siteMetadata: {
    title: 'B&B Culummi Cavallino',
    description:
      'Culummi Bed & Breakfast a Cavallino di Lecce, per le tue vacanze nel Salento. Prenota ora!',
    siteUrl: 'https://www.culummi.it',
    author: 'Software Ateliers',
    authorUrl: 'https://softwareateliers.com',
    adsense: '',
    phone: '+39 346 27 06 323',
    email: 'liculummi@gmail.com',
    name: 'Culummi Bed & Breakfast',
    vat: 'vat number',
    address: {
      street: 'Via XXIV Maggio',
      number: '49a',
      postalCode: '73020',
      city: 'Cavallino',
      province: 'Lecce',
      country: 'Italia',
    },
    social: {
      facebook: 'https://www.facebook.com/culummi/',
      tripadvisor:
        'https://www.tripadvisor.com/Hotel_Review-g1406923-d8070862-Reviews-Culummi_Bed_Breakfast-Cavallino_Province_of_Lecce_Puglia.html',
      instagram: 'https://www.instagram.com/culummi_bb',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/rooms/`,
        name: 'rooms',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blocks/`,
        name: 'blocks',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatstrap',
        short_name: 'Gatstrap',
        description: 'Gatsby starter for bootstrap a blog',
        homepage_url: 'https://gatstrap.netlify.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
