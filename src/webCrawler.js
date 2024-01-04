const axios = require('axios');

class WebCrawler {
  constructor() {
    this.visitedUrls = new Set();
  }

  async crawl(url, keyword = null) {
    if (this.visitedUrls.has(url)) {
      console.log(`Skipping already visited URL: ${url}`);
      return 'skipped';
    }

    this.visitedUrls.add(url);

    try {
      const response = await axios.get(url);
      const content = response.data;

      if (keyword) {
        const keywordRegex = new RegExp(keyword, 'gi');
        const matches = content.match(keywordRegex) || [];
        console.log(`Found ${matches.length} matches for keyword '${keyword}' in URL: ${url}`);
        return matches;
      } else {
        console.log(content.substring(0, 500));
        return content.substring(0, 500);
      }
    } catch (error) {
      console.error('Error during web crawl:', error.message);
      return 'error';
    }
  }
}

module.exports = WebCrawler;