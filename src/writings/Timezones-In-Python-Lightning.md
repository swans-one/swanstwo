---
title: 'Timezones In Python: Lightning Talk.'
subtitle: Given to PghPy on May 28th 2014
author: Erik Swanson
presented: 5/28/2014
published: 7/19/2016
last_modified: 7/19/2016
breadcrumb:
- link: '/writings'
  name: 'Writings'
---

Lightning Talk on Timezones in Python. {#title}
===============================================

Given to PghPy on May 28th 2014. {#subtitle}
--------------------------------------------

Timezones in python are hard. There are a lot of them, they're
constantly changing, and many follow different rules. This talk
addressed some of the problems that make timezones hard, and some of
the existing solutions for working with time-zone aware data.

The slides can be found here:

<div class="centering">
[Timezones in Python](/media/presentations/2014/timezone_troubles.pdf)
</div>

At the time of the presentation I was helping to build an open source
package for making timezones simpler, called
[fleming](https://github.com/ambitioninc/fleming), named after
Sandford Fleming, father of the worldwide timezone system. This
package includes a number of functions useful for doing timezone
manipulations, with special care taken around daylight savings time
boundaries.

I was also working on building a Django package for tracking recurring
events in users local times. This package
[Django Localized Recurrence](http://django-localized-recurrence.readthedocs.io/en/latest/quickstart.html),
used fleming to make conversions between users local timezones and
UTC, the underlying data representation easier.

I still think there's room for improvement in dealing with timezones
using python. As evidenced by the huge number of packages on pypi for
working with datetimes, timedeltas and with timezone data.

Additional Resources
--------------------

- [Standard Library Datetime](https://docs.python.org/2/library/datetime.html)
- [Standard Library Calendar](https://docs.python.org/2/library/calendar.html)
- [pytz](http://pythonhosted.org/pytz/)
- [dateutils](http://labix.org/python-dateutil)
- [fleming](https://github.com/ambitioninc/fleming)
- [django-datetime-utc](https://pypi.python.org/pypi/django-datetime-utc/1.0.2)
