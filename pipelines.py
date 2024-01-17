```python
from scrapy.exceptions import DropItem
from items import RedditItem

class RedditPipeline(object):
    def __init__(self):
        self.ids_seen = set()

    def process_item(self, item, spider):
        if isinstance(item, RedditItem):
            if item['id'] in self.ids_seen:
                raise DropItem("Duplicate item found: %s" % item)
            else:
                self.ids_seen.add(item['id'])
                return item
        else:
            return item
```