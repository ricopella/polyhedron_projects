const { createProxyMiddleware } = require('http-proxy-middleware');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Polyhedron Projects 2020`,
    description: `Web Design & Creative Strategy for The Greater Good of All`,
    author: `Narin Rico Sundarabhaya C/O  Polyhedron Projects`,
    lang: `en`,
    siteUrl: `https://polyhedronprojects.com`,
    keywords: [
      `music please`,
      `production`,
      'web development',
      'podcast',
      'live stream',
      'creative',
      'technology',
      'design',
      'UI/UX',
      'Web App Development',
      'Freelance',
    ],
    twitterUserName: `@themusicplease`,
    image: `/images/PLEASE.png`,
  },
  // to solve CORS for local development usage of lambda functions
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:8888',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        exclude: `${__dirname}/src/images/svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Polyhedron Projects App`,
        short_name: `Polyhedron Projects`,
        start_url: `/`,
        background_color: `#000000`,
        display: 'minimal-ui',
        icon: `src/images/favicon/favicon.ico`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.polyhedronprojects.com',
        sitemap: 'https://www.polyhedronprojects.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@styled': 'src/styled.ts',
          '@containers': 'src/containers',
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@images': 'src/images',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'ts'],
      },
    },
    // `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
  ],
};
