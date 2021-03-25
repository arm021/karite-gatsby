require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  pathPrefix: "/karite-gatsby",
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopify: {
          shopName: `ikparis-usd`, 
          accessToken: `ce24bbb1a10df015a13972154fa07d4e`,
        },
        gatsbyStorefrontApi: {
          apiUrl: `https://ce24bbb1a10df015a13972154fa07d4e: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@ikparis-usd.myshopify.com/admin/api/2021-01/orders.json`,
          accessToken: `ce24bbb1a10df015a13972154fa07d4e`,
        },
        useGatsbyStorefrontApi: false,
        basePath: '/',
        productImagesCarouselProps: {
          // See: https://github.com/express-labs/pure-react-carousel#carouselprovider-
          // naturalSlideWidth: 500,
          // naturalSlideHeight: 500,
        },
        product: {
          maxDescriptionSectionsNumber: 10,
        },
        // reviews: {
          // reviewsNumberPerPage: 10,
        // },
        manifest: {
          name: 'Institut Karité Paris™',
          short_name: 'Institut Karité',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#323232',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://ikparis-usd.myshopify.com',
    gatsbyStorefrontConfig: {
      storeName: 'Institut Karité Paris',
      storeDescription: 'Demo store description',
      logo: {
        url: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/karite-logo-1531214864.png',
        width: 130,
        height: 'auto',
      }, 
      email: 'contact@ikparis.com',
      company: 'Institut Karité Paris™',
      location: '75008 Paris, France',
      street: '420 rue Saint Honoré',
      shipper: 'Siège Social - Head Office',
      phone: '+33 (0)1 40 07 02 85',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://www.facebook.com/institutkariteparis/',
        'https://www.instagram.com/institutkarite/',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      // Default array ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal']
      payments: ['visa', 'mastercard', 'discover', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Jewelery',
              type: 'collection',
              handle: 'jewelery',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Silk Summer Top',
              type: 'product',
              handle: 'silk-summer-top',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Face',
              type: 'collection',
              handle: 'face',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Body',
              type: 'collection',
              handle: 'body',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Hair',
              type: 'collection',
              handle: 'hair',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Red Sports Tee',
              type: 'product',
              handle: 'red-sports-tee',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Anchor Bracelet Mens',
              type: 'product',
              handle: 'leather-anchor',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Yellow Sofa',
              type: 'product',
              handle: 'yellow-sofa',
              textColor: 'black',
              textBgColor: 'white',
            },
          ],
        },
      ],
      // Product page policy images and captions
      policies: [
        {
          imageSrc: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/prod-pol1.png',
          caption: 'Returns within 14 days',
        },
        {
          imageSrc: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/prod-pol2.png',
          caption: 'Made in France',
        },
        {
          imageSrc: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/prod-pol3.png',
          caption: 'Customer service from 9am to 6pm',
        },
        {
          imageSrc: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/prod-pol4.png',
          caption: 'US free Delivengo shipping on orders over $100',
        },
      ],
      // Product page sidenote
      sidenotes: [
        {
          reminder: "The ingredients listed within the composition of the products of the brand Institut Karité Paris are regularly updated. Before using a product of the brand Institut Karité Paris, please read the list of ingredients located on its packaging to ensure that the ingredients are suitable for your personal use, particularly if you're at risk of an allergic reaction. Only the ingredients listed on the packaging should be considered binding.",
          imageSrc: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/img-package.png',
          footnotes: 'Remember to sort your packaging.',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: 'Face',
            type: 'header',
            handle: '',
            link: '',
            children: [
              { name: 'Hydrating Cares', type: 'collection', handle: 'hydrating-cares' },
              { name: 'Anti-Aging Cares', type: 'collection', handle: 'anti-aging-cares' },
              { name: 'Lip Cares', type: 'collection', handle: 'lip-cares' },
              { name: 'Men Cares', type: 'collection', handle: 'men-cares' },
            ],
          },
          { name: 'Body', type: 'collection', handle: 'body' },
          { name: 'Hair', type: 'collection', handle: 'hair' },
          { name: 'Best Sellers', type: 'collection', handle: 'face' },
          { name: 'The Art of Gifting', type: 'collection', handle: 'gift-sets' },
        ],
      }),
      topNavMenu: [
        { name: 'The House of Shea', link: '/pages/about-us' },
        { name: 'Journal', link: '/blog/journal' },
        { name: 'Professional Account', link: '/pages/professional-account' },
      ],
      footerLinksShop: [
        { header: 'Shop' },
        { name: 'Face', link: '/collection/face' },
        { name: 'Body', link: '/collection/body' },
        { name: 'Hair', link: '/collection/hair' },
        { name: 'Best Sellers', link: '/collection/all?=sort_by=best-selling' },
        { name: 'Gift Sets', link: '/collection/gift-sets' },
        { name: 'Accessories', link: '/collection/accessories' },
      ],
      footerLinksShea: [
        { header: 'House of Shea' },
        { name: 'Our Values', link: '/pages/about-us' },
        { name: 'Find a Store', link: '/pages/find-a-store' },
        { name: 'What others say about us', link: '/pages/professional-account' },
        { name: 'Benefits and Uses', link: '/pages/our-products' },
        { name: 'Origin and Manufacturing', link: '/pages/our-products' },
        { name: 'Our Journal', link: '/blog/journal' },
      ],
      footerLinksInfo: [
        { header: 'Information' },
        { name: 'General Conditions of Sale', link: '/pages/general-conditions-of-sale' },
        { name: 'Legal Notice', link: '/pages/legal-notice' },
        { name: 'Privacy Policy', link: '/pages/privacy-policy' },
        { name: 'Returns and Refunds', link: '/pages/returns-and-refunds' },
        { name: 'Shipping', link: '/pages/shipping' },
        { name: 'Contact', link: '/pages/contact-us' },
      ],
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
