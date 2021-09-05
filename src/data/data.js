module.exports = {
  SiteTitle: 'Hieu\'s',
  Sitelogo: '#',
  SiteLogoText: 'Hieu\'s',
  SiteAuthor: 'Abdelali Dahir',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {    
    linkedin: 'https://www.linkedin.com/in/abdelali-dahir-0b5344111/',
  },
  SiteAddress: {
    city: 'Ho Chi Minh',
    region: '',
    country: 'Viet Nam',
    zipCode: '700000',
  },
  SiteContact: {
    email: 'hieunguyenel@gmail.com',
    phone: '+84778287898',
  },
  SiteCopyright: '2020',
};
