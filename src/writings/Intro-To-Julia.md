---
title: 'Introduction To Julia'
subtitle: 'An Interactive Tutorial'
author: Erik Swanson
presented: 12/1/2015
published: 10/17/2016
last_modified: 10/17/2016
breadcrumb:
- link: '/writings'
  name: 'Writings'
---


Introduction To Julia {#title}
==============================

An Interactive Tutorial {#subtitle}
-----------------------------------

This introduction to the
[Julia programming language](http://julialang.org), and its uses in
scientific computing, was given to the Pittsburgh Code and Supply
meetup on January 12th, 2015. The presentation was given as an
interactive tutorial, where everyone was encouraged to follow along in
IJulia notebooks. To facilitate this, I spun up a pair of Jupyter
notebook servers on Digital Ocean droplets that attendees could
connect to and follow along without having to have Julia installed
locally.

The presentation was given in two sections.  The first section covered
the basic syntax and semantics of the Julia language. The second
section built upon that understanding and worked through an Monte
Carlo simulation, highlighting some of the strengths of the Julia
language in terms of its expressivity for numeric computing and its
impressive performance.

There are no slides for this presentation, as it was given
interactively. However, there is a GitHub repository with the code I
put together for the presentation:

<div class="centering">
[Intro To Julia GitHub Repository](https://github.com/swans-one/IntroToJulia)
</div>

The notebooks for the two sections, along with clarifying prose, can
also be viewed (but not interacted with) in a nice format through
nbviewer at the following links:

<div class="centering">
[Basic Julia Notebook](http://nbviewer.jupyter.org/github/Wilduck/IntroToJulia/blob/v1.0/IntroToJulia/BasicJulia.ipynb)
</div>

<div class="centering">
[Finding Pi with Monte Carlo Notebook](http://nbviewer.jupyter.org/github/Wilduck/IntroToJulia/blob/v1.0/IntroToJulia/FindingPi.ipynb)
</div>

Additional Resources
--------------------

Julia has a collection of learning resources on the official site, and
their official documentation is very good. Additionally, I used
Jupyter notebooks, which offer a interactive experience that is
especially helpful when learning or doing exploratory programming.

For the second section of this presentation I also used two external
packages to aid in plotting, Gadfly and DataFrame

- [Julia Language Learning Resources Introduction](http://julialang.org/learning/)
- [Julia Language documentation](http://docs.julialang.org/en/release-0.5/)
- [Jupyter Notebook](http://jupyter.org/)
- [Setting Up Your Julia Environment (includes info on Jupyter notebooks)](http://lectures.quantecon.org/jl/getting_started.html)
- [Gadfly Plotting](http://gadflyjl.org/stable/)
- [Julia DataFrame](http://dataframesjl.readthedocs.io/en/latest/)
