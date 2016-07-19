---
title: 'Lightning talk on data.table'
subtitle: Given to the useR group on November 4th 2013
author: Erik Swanson
presented: 11/4/2013
published: 8/31/2013
last_modified: 6/23/2016
breadcrumb:
- link: '/writings'
  name: 'Writings'

---


Lightning Talk on data.table {#title}
=====================================

Given to the useR group on November 4th 2013. {#subtitle}
=========================================================

The data.table R package is a drop in replacement for R data
frames. It's primary benefit is that, by working with sorted
data, many common operations can be drastically sped up.

On November 4th, 2013 I gave a 10-minute lightning talk to
the Pittsburgh userR Group going through some of the basic
syntax, and showing an example of the potential
speedups. The slides can be found here:

<div class="centering">
[useR Group Lighting Talk Slides](/media/presentations/2013/datatableLightning20131104.pdf)
</div>

Additionally, these slides were produced with
[Beamer](http://en.wikipedia.org/wiki/Beamer_(LaTeX)) and all the R
code you see is embedded and runnable in the document using
[Sweave](http://www.stat.uni-muenchen.de/~leisch/Sweave/). If you want
download the source for the file and play around with the code inside,
it is available here:

<div class="centering">
[Presentation Beamer/Sweave Source Code](/media/presentations/2013/datatableLightning20131104.Rnw)
</div>

Additional Resources
--------------------

The official documentation for data.table is fairly
complete. I've included a number of links below. Before
reading the full package documentation, the fastest way to
get started is with the official quick introduction. The
complete documentation provides very in depth explanations
of each argument, interface and method, it's only useful if
you know what you're looking for. The F.A.Q. page takes an
approach that tries to answer questions that would occur
during regular use of the package.

- [Quick Introduction](http://cran.r-project.org/web/packages/data.table/vignettes/datatable-intro.pdf)
- [Complete Documentation](http://cran.r-project.org/web/packages/data.table/data.table.pdf)
- [Frequently Asked Questions](http://cran.r-project.org/web/packages/data.table/vignettes/datatable-faq.pdf)
