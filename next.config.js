/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
//   images: {
//     domains: ['ichef.bbci.co.uk','m.files.bbci.co.uk','media.npr.org','i.insider.com','readwrite.com',
//   's.yimg.com','media.wired.com','i.kinja-img.com','cdn.arstechnica.net','i0.wp.com','images.fastcompany.net',
// 'www.businessinsider.com','media.newyorker.com','images.wsj.net','a.fsdn.com','cdn.vox-cdn.com','cdn.mos.cms.futurecdn.net','api.time.com','compote.slate.com',
// 'img.huffingtonpost.com','a.espncdn.com','i.abcnewsfe.com','static.foxnews.com','www.digitaltrends.com','news.wisc.edu',
// 'static.arxiv.org','earimediaprodweb.azurewebsites.net','dtdxsaqq5q4.cloudfront.net','assets.ourworldindata.org',
// 'news.tulane.edu','www.bristol.ac.uk']

//   }
//This allows all domains
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
},
}

module.exports = nextConfig
