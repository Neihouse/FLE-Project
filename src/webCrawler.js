const axios = require('axios');

class WebCrawler {
  constructor() {
    this.visitedUrls = new Set();
  }

  async crawl(url, keyword = null) {
    if (this.visitedUrls.has(url)) {
      console.log(`Skipping already visited URL: ${url}`);
      return;
    }

    try {
      const response = await axios.get(url);
      const content = response.data;

      if (keyword) {
        const keywordRegex = new RegExp(keyword, 'gi');
        const matches = content.match(keywordRegex) || [];
        console.log(`Found ${matches.length} matches for keyword '${keyword}' in URL: ${url}`);
      } else {
        console.log(content.substring(0, 500));
      }

      this.visitedUrls.add(url);
    } catch (error) {
      console.error('Error during web crawl:', error.message);
    }
  }
}

module.exports = WebCrawler;