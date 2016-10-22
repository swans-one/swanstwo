---
title: 'Packaging Django Apps'
subtitle: 'Into Distributable Packages'
author: Erik Swanson
presented: '8/7/2015'
published: '19/10/2016'
last_modified: '19/10/2016'
breadcrumb:
- link: '/writings'
  name: 'Writings'
---


Packaging Django Apps {#title}
==============================

Into Distributable Packages {#subtitle}
---------------------------------------


One of the cool things about Django projects being broken down in to
Apps, is that these apps can be packaged and distributated
separately. This presentation, given to Pittsburgh Code and Supply on
July 8th, 2015, detailed why you might want to turn your Django apps
into packages, and how to do so.

The presentation slides can be found here:

<div class="centering">
[Packaging Django Apps Slides](/media/presentations/2015/packaging_django_apps.pdf)
</div>

The slides above mostly served as talking points for Python packages
and Django apps. To actually get into the details of packaging django
apps, I put together a demonstration of these concepts in a small,
packaged, installable django application:

<div class="centering">
[Django Kittens](https://github.com/swans-one/django-kittens)
</div>

For another treatment of python packaging, see the notes from my
presentation on [Python Packaging: What and How](/writings/Python-Packaging)

Additional Resources
--------------------

There are lots of good resources on Python packaging and Django
applications, a few of which are listed below. Additionally, I've
included a link to the template that I've in the past for setting up
the intial structure of my projects.

- [Python Packaging Users Guide](https://packaging.python.org/)
- [Django Applications](https://docs.djangoproject.com/en/1.10/ref/applications/)
- [Ambition Django App Template](https://github.com/ambitioninc/django-app-template)
