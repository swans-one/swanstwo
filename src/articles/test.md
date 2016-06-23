---
title: 'This is my test post:'
short-title: 'Test Post'
subtitle: Where I try out all my pandoc features
author: Erik Swanson
published: 6/22/2016
last_modified: 6/22/2016
breadcrumb:
- link: '/writings'
  name: 'Writings'

---

Testing 123
===========

This is a test of how all the elements of markdown can be converted
into html. I'm writing this so that I can style them appropriately.

Simple Formatting
=================

We can _put words into italic_, we can **make words bold**. We can
make words **bold _and_** _italic_. These are the various types of
emphasis. We can also do ~~strikethrough using double tidles~~.

Things should also come out in paragraphs. I want to check what the
markup for all of this looks like. I'm kind of assuming that I'll be
able to style h1 and h2 tags in a reasonable way that also happens to
be separate from the title/subtitle tags.

Different types of headings
===========================

We should be able to do headings from \<h1\> all the way to \<h6\>.

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Headers can also be given explicit identifiers:

### This is about pizza {#pizza .flatbread toppings=none}

For example, this section about pizza will end up with an html
`id="pizza", class="flatbread", toppings="none"`. If we didn't
explicitly include an identifier, it would still get an `id`. This
would be constructed from the title, by removing punctuation and
replacing spaces with hypens. Here, it would be
`id=this-is-about-pizza`.

Lists
=====

We should be able to do ordered lists. These should work no matter
what numbers I use to write the markdown code. It should be simple to
make a set of steps which are automatically numbered.

1. Write the first things
1. Write another things
1. ...
1. Profit!

We should also be able to do unordered lists:

- Testing
- one
- two
- three

And we should be able to do mixed lists:

1. Item one
    + Sub
    + Sub two
2. This is another item
    + blah
        * Blah blah
        * Blah Blah
        * Blah Blah Blah
3. This is a thing

I can also make lists more spaced out

* For example

* This is a spaced out list

* I don't know how it will look.

I can also make definition lists as long as I'm using pandoc to
process this markdown. I'm not sure if I want to use this feature,
since it would make it harder to migrate. This feature is also
included in PHP Markdown extra though.

Term 1

: Definition 1

Term 2

: Definition 2

        { some code, part of definition 2 }

    This is the third paragraph of the definiton


Links and images
================

Links
-----

Here's a link to [Google](www.google.com). I can also use automatic
links, which will just show up as a link
<http://swansone.com>. Additionally, if we want to add a title to a
link, for example, if I wanted to describe [xkcd](xkcd.com "As the
best webcomic"), I totally could.

I can also create links to internal sections, by linking to an
header's id. For example, see the section on [Pizza](#pizza). These
links can also be made by reference. This can be usefull for long
links, like this one to [Carnegie Mellon on Google Maps][cmu-map]. I
could also reference this link in a self linking, way, if my reference
were more descriptive, it might look better, but I can just say [cmu-map][].

[cmu-map]: <https://www.google.com/maps/place/Carnegie+Mellon+University/@40.4416628,-79.9449655,16.44z/data=!4m5!3m4!1s0x0000000000000000:0x88716b461fc4daf4!8m2!3d40.4443261!4d-79.9448986>

Images
------

All it takes to add an image is to immediately prepend a link with an
\!. Apparently it will be wrapped in a `<figure>` block, and what
would be the link text will be the caption.

![This could be a long piece of well thought out text that describes the
image of me, sitting in the chair, looking nice, like I often do.
But also somewhat thoughtful.](/media/images/erik_in_chair_w300.png
 "This will be the alt text")

You can do this with references as well.

Code Formatting and Syntax Highlighting
=======================================

I'm going to try out a couple languages and see how the highlighting
comes out. I'm not sure what it will look like, but hopefully it's
pretty good.

```python
from csv import DictReader

FILENAME = "/home/erik/some/file.csv"

with open(FILENAME) as f:
    reader = DictReader(f)
    for line in reader:
        print(line['this'])

class SomeClass(object):
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def wow():
        return true
```

I think I should be able to do inline identifiers as well. Like, for
example if I wanted to reference `SomeClass` from above, I should be
able to do so fairly easily.

Quotes and Blockquotes
======================

I want to see what things look like in block quotes.

> This is a blockquote, I should be able to type something here and
> see the whole thing wrapped in blockquote tags. I want to make sure
> there's enough text to wrap on to the next line. My roommates are
> talking about game of thrones right now. That's pretty cool I guess.
>
> > I can also create nested blockquotes that go steps deeper. I
> > don't think that I need to write too much here, but I want to
> > make sure there's enough here that it will wrap over to the
> > next line.

I can still do inline quotes with <q>This is a quote</q>. But I don't
think there's markdown support for that.

Embedded HTML
=============

I should be able to embed arbitrary html. Like, make a figure:

<figure>
<img src="/media/images/erik_in_chair_w300.png">
<figcaption>This is a caption</figcaption>
</figure>

I should also be able to inline markup, like adding a quote, but
<q>Ain't nobody got time for that</q>.

Tables
======

We're going to test a couple table styles. I'm not sure which I
prefer.

Simple Left    Center    Right
------ ------ -------- -------
x      1         i         wow
y      2         j      this's
z      3         k       great


I can also write tables by using `orgtbl-mode` to edit the tables. I
can't control their alignment though.

+-----+------+-------+
| One | Two  | Three |
+=====+======+=======+
| 1   | 2    | 3     |
+-----+------+-------+
| uno | dos  | tres  |
+-----+------+-------+
| un  | deux | trois |
+-----+------+-------+
| yi  | er   | san   |
+-----+------+-------+

Maybe that doesn't matter in html though? I wonder how these will come
out differently than if I manually add in the colons that are used to
determine alignment for "pipe tables"


| One | Two  | Three |
|:----|:----:|------:|
| 1   | 2    | 3     |
| uno | dos  | tres  |
| un  | deux | trois |
| yi  | er   | san   |
