---
title: 'Variety in Public Radio Music'
subtitle: A Look at the Data
author: Erik Swanson
published: 8/31/2013
last_modified: 6/23/2016
breadcrumb:
- link: '/writings'
  name: 'Writings'

---



Variety in Public Radio Music: {#title}
=======================================


A Look at the Data. {#subtitle}
===============================

On January 24th, 2005 a new radio station came on the air in
Minnesota. Broadcasting on 89.3 FM,
[The Current](http://www.thecurrent.org/) The Current promised to
bring an interesting variety of music to the Twin Cities, and to
highlight local artists. From it's first song,
[Shh](http://www.youtube.com/watch?v=bV_E8SPc_jo) by Atmosphere, The
Current fulfilled this promise.

It was only a few months after The Current started broadcasting that I
was introduced to the station. A friend I was working with in the
Summer of 2005 started turning on The Current while we were working. I
was quickly hooked. At that point in my life I knew that I enjoyed
finding new music, but I hadn't found a source that constantly
provided me with good music. The Current became that source.

I wasn't the only one listening either. Readers of the Minneapolis
newspaper, City Pages, voted The Current as the Readers Choice
[Best Radio Station of 2005](http://www.citypages.com/bestof/2005/award/best-radio-station-3009/)
(and of 2006, and of each year thereafter). By 2008 The Current
[won the award proper](http://www.citypages.com/bestof/2008/award/best-radio-station-443667/).


The Problem
-----------

When I left Minnesota to go to school in Portland, Oregon, I missed
The Current, and I always looked forward to hearing new music when I
would come home for breaks. It seemed, though, that every time that I
came home, the music The Current was playing was a little more
generic, and the playlist was more repetitious. I still listened, and
still heard new music on the station, but I didn't like hearing a few
of the same generic indie-rock songs over and over again.

I got fed up, not long ago, when I turned on The Current on a Thursday
night to hear their weekly program <q>The Charts Show.</q> Ostensibly,
program plays the top 20 songs for the week, as voted on by the
listeners. While I don't believe the voting is rigged, it always seems
that the songs that are in the top 20 are also the songs I've been
hearing far too often for the past week already.

Fueled by the frustration of having
heard [Ho Hey](http://www.youtube.com/watch?v=zvCBSSwgtg4)
by The Lumineers one two many times, I went to
the [online playlist](http://www.thecurrent.org/playlist)
and scraped data for all of the songs that have been played on The
Current between January 1st, 2006 and December 31st, 2012. I had to
know: **Has The Current really be getting worse?  Or am I just
turning into a radio grouch?**


The Data
---------

The results are interesting. In the seven years from which I collected
playlist data, The Current played 805,604 songs. This averages out to
about 13.1 songs per hour over the course of those seven years. About
5% of the data collected contains errors or missing values. Once we
clean and normalize the data set, we end up with 760,146 plays to
analyze.

The simplest way to check if variety is declining over time would be
to check the number of different songs that are played each year. If
The Current is drawing from a smaller set of songs, it would be fairly
clear that variety is decreasing. The following table shows the total
number of songs played each year (including repeats), and the number
of unique songs played each year.

<table class="simple-table">
<tr><th> Year </th> <th> Total Songs Played </th> <th> Unique Songs Played </th>  </tr>
<tr><td> 2006 </td> <td> 94345 </td> <td> 13235 </td> </tr>
<tr><td> 2007 </td> <td> 95654 </td> <td> 14013 </td> </tr>
<tr><td> 2008 </td> <td> 108102 </td> <td> 10518 </td> </tr>
<tr><td> 2009 </td> <td> 118199 </td> <td> 11850 </td> </tr>
<tr><td> 2010 </td> <td> 116143 </td> <td> 11825 </td> </tr>
<tr><td> 2011 </td> <td> 113964 </td> <td> 13048 </td> </tr>
<tr><td> 2012 </td> <td> 113739 </td> <td> 13090 </td> </tr>
</table>


This table doesn't go very far towards answering our question. There
seems to be a dip in the number of unique songs played in the year
2008, but that number increases from there on. Also, the total number
of songs played seems to be increasing as well.


This table doesn't necessarily reflect what you would hear if you were
listening to The Current on a regular basis. Most of those unique
songs could be played only once in the year while just a few songs get
played over and over again. A better measure might be how much time is
spent playing the 50 most played songs. Or maybe the 100 or 1000 most
played songs. Figure 1 plots all of these (and every step in between)
for each year between 2006 and 2012.

![Figure 1. The cumulative proportion of airtime (or, more
accurately, the proportion of the total play count of all songs in
a given year) spent playing the top x number of songs. Each line
represents the data for a given year.][figure-1]

[figure-1]: </media/images/theCurrent/cumulativeTopProportion.png>

It is immediately apparent from Figure 1 that 2006 and 2007 are
different than any of the other years. In 2006, If you were to listen
to every song The Current played, and mark down every time you heard
one of the songs that ended up being in the top 50 songs that year,
you would only make a mark for 2.7% of the songs you heard, whereas in
2012 you would be making a mark for 10% of the songs. If you were to
do the same exercise for the top 250 songs you would mark down 10.7%
of songs in 2006 and 34.1% of songs in 2012.

Taking this analysis to the extreme, in 2008, the top 1,000 songs
represented 61% of airtime. Looking back at the table above, we can
see that 10,518 unique songs were played in 2008. The top 1,000 songs,
then, represent just under 10% of songs The Current is willing to
air, but they spend 61% of airtime on those songs.

To a large extent, though, it's not the 1,000th most played song that
would make the station feel repetitive. Throughout the course of a
whole year, the 1,000th most played song doesn't go above 25 total
plays in any year in the data set. What makes a station feel
repetitive is when you hear one song over and over again. At that
point it doesn't have to be over the course of a whole year. In fact,
it doesn't have to take more than a few days to notice that a radio
station is giving a disproportionate amount of airtime to a particular
song.

To get at the effect of hearing one song over and over, we can look at
the number of plays the top-played song in a given week gets. This is
plotted in Figure 2 below. This view also has the benefit of giving us
a fine grained look into changes in the station over time.

![Figure 2. This graph is constructed by taking the playlist data
for each week and determining which song was played the most in
that week. For each week between January 2006 and December 2012
the number of plays for the top song in that week is plotted. The
major tick-marks (roughly) represent year boundaries.][figure-2]

[figure-2]: </media/images/theCurrent/weeklyTopPlays.png>

Looking at Figure 2, the most striking feature of the graph is the
jump that occurs right around week 104 (the start of 2008). The
Current went from playing their weekly top-song 4-7 times a week to
playing their weekly top-song 15-20 times a week. This obviously a
numerically significant difference, but it is a qualitative difference
as well. When you are significantly above seven plays a week you're in
the realm of hearing the same song multiple times in a single day.

After noticing the significant change at the end of 2007, it's also
worth noting that the number of top-song plays peaks at 21 plays per
week at the beginning of 2009, and then declines back to around 16 or
17 plays per day.  Interestingly, it seems that the three dips in
Figure 2, at the end of 2010, 2011, and 2012 correspond to a time when
The Current is playing more holiday music.

Conclusions
-----------

So, how and why did this happen? Figure 2 shows an abrupt shift in how
often the top songs get played. It seems unlikely that the DJs at The
Current suddenly decided that they wanted to be playing the same songs
over and over again.

After doing some digging I found that in late 2007 the current hired a
consulting company in response to declining numbers of listeners. The
suggested measure was to curate a set of songs to play in heavy
rotation at any given
time. [City Pages reported on this](http://www.citypages.com/2008-03-26/news/the-current-shrinks-its-playlist/full/)
in 2008, describing the controversial decision give a <q>new
mandate</q> to DJs that <q>puts a handful of new indie hits in heavy
rotation.</q>

This change fits quite cleanly with the data. The change to a heavy
rotation model can be seen in the large difference in the proportion
of airtime taken up by the top songs in 2008 as opposed to 2006 or
2007, and the time of the shift itself can be fairly closely
pinpointed to the first few weeks of 2008 by looking at Figure 2.

The natural question to ask next is whether or not the change had the
desired effect. Did the ratings and regular listener count go up?
[According to MinnPost](http://www.minnpost.com/david-brauer-blog/2011/07/why-currents-ratings-are-soaring) <q>In December 2009, a mere 1.5 percent of local radio
listeners tuned in to Minnesota Public Radio's The Current [...] by
June, that 1.5 had nearly tripled to 4.3.</q> This would suggest that the
early 2008 change to a heavy rotation playlist did not, by itself,
cause the ratings increase.

The same article by MinnPost would argue that a some portion of the
ratings increase seen in early 2010 can be attributed to the 2009 hire
of Jim McGuinn as the Program Director for The Current.


> McGuinn hit town after the Current's playlist underwent a major
> upheaval &mdash; from an <q>antiformat</q> where DJs literally brought in
> favorite CDs from their collections, to a tighter, consultant-advised
> format that caused one part-time host to quit over the moroseness.
>
> <q>It was a fairly abrupt shift,</q> concedes morning co-host Steve Seel,
> noting the playlist became <q>much tighter</q> before McGuinn <q>relaxed</q> it.

This slightly more relaxed approach, along with careful tracking of
playlist data by The Current itself seems to be working for increased
ratings. It may be that this policy change by Jim McGuinn is the cause
of the slight decrease in number of plays of the weekly top song that
we see in Figure 2 after 2009.

My personal conclusion from this investigation is that, while I may
not always be pleased that The Current has chosen a model that
emphasizes fewer tracks at a given time, there are clearly benefits to
the station, and I would like the station to survive. I'll still
listen, and they will still introduce me to new music. It is certainly
fun to be able to confirm a number of suspicions about the quality of
their playlists, and this is a cool starting point for a number of
directions of inquiry.

Despite the decline in variety over the years, if you're looking for a
good list of really good indie/alternative songs,
[this list](/media/documents/theCurrent/topSongEachWeek.html),
produced from this data set, of every song that has been the top
played song on The Current in a given week is a great place to
look. Or, a slightly more curated list would be the
[top ten songs of each year](/media/documents/theCurrent/topSongsByYear.html).


The code used to do this analysis can be found in this
[gist](https://gist.github.com/Wilduck/6399433).


Possible Extensions
-------------------
- Comparing The Current's playlist to those of other radio stations,
  both radio stations that target similar listeners and radio stations
  that play differnt music (top 40 stations, country music stations,
  classical music, etc.). Further, can we combine this data with
  actual listener data?
- Look at the effects on The Current's Chart Show. How fair is the
  chart show? That is, are the choices people make influenced by
  playcount? Even if we control for the quality of the song?
- Analysis of the factors that go in to choosing songs for heavy
  rotation. Using a music database (such as
  (http://www.discogs.com)Discogs</a>) to pull in more information
  about these songs, does a factor like track length have any bearing
  on the likelihood of a song making it to heavy rotation? What about
  independent listener ratings?
- Is it possible to refine the variety calculation to include hourly
  trends in listenership? That is, should we weight songs by how many
  people hear them (e.g. a song played every day during drive time
  drive time is more likely to be heard by more people)? How does this
  change the trend over time?
