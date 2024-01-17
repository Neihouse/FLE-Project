```python
from scrapy import signals
from scrapy.exceptions import IgnoreRequest
from scrapy.http import Response
import time

class RateLimitMiddleware(object):
    def __init__(self):
        self.last_request_time = time.time()

    def process_request(self, request, spider):
        delay = 1  # Delay in seconds
        elapsed_time = time.time() - self.last_request_time
        if elapsed_time < delay:
            time.sleep(delay - elapsed_time)
        self.last_request_time = time.time()

class ErrorHandlingMiddleware(object):
    def process_exception(self, request, exception, spider):
        if isinstance(exception, IgnoreRequest):
            return Response(request.url, status=200, body='')

class CachingMiddleware(object):
    def __init__(self):
        self.cache = {}

    def process_request(self, request, spider):
        if request.url in self.cache:
            return self.cache[request.url]
        else:
            return None

    def process_response(self, request, response, spider):
        self.cache[request.url] = response
        return response

class WebScraperSpiderMiddleware(object):
    @classmethod
    def from_crawler(cls, crawler):
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        return None

    def process_spider_output(self, response, result, spider):
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        pass

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)
```