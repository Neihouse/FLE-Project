```python
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

from scrapy_spider import RedditSpider

def main():
    process = CrawlerProcess(get_project_settings())
    process.crawl(RedditSpider)
    process.start()

if __name__ == "__main__":
    main()
```