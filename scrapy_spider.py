```python
import scrapy
from scrapy.exceptions import CloseSpider
from items import RedditItem
from scrapy.http import Request
import oauth2 as oauth
import json

class RedditSpider(scrapy.Spider):
    name = 'reddit_spider'
    allowed_domains = ['www.reddit.com']
    start_urls = ['http://www.reddit.com/']

    def start_requests(self):
        # OAuth 2.0 authentication
        consumer = oauth.Consumer(key='your_key', secret='your_secret')
        token = oauth.Token(key='your_token', secret='your_token_secret')
        client = oauth.Client(consumer, token)

        for url in self.start_urls:
            yield Request(url, callback=self.parse, errback=self.handle_error)

    def parse(self, response):
        # Extract data from Reddit
        data = json.loads(response.body)
        for post in data['data']['children']:
            item = RedditItem()
            item['title'] = post['data']['title']
            item['url'] = post['data']['url']
            item['content'] = post['data']['selftext']
            yield item

    def handle_error(self, failure):
        # Error handling
        self.log(f'An error occurred: {failure}', level=scrapy.log.ERROR)
        raise CloseSpider('connection_error')

    def close(self, reason):
        # Close spider
        self.log(f'Spider closed: {reason}', level=scrapy.log.INFO)
```