swipebox-meteor
===============

Swipebox image viewer plugin for Meteor. 
(Swipebox is a responsive image viewer lightbox, that also works perfectly on mobile devices.) 
This package is using the original [swipebox plugin](https://github.com/brutaldesign/swipebox).

#Install

Installing is really straightforward, just add it to your meteor app, and you can use it right away.

`meteor add horka:swipebox`

#Usage
After installation just add the class `.swipebox` to the links you would like to open via Swipebox. 

An example:
`<a href="<image-url>" class="swipebox" title="<image-title>"><img src="<image-url>" alt="..."></a>`
The title attribute of the link will appear in the lightbox.