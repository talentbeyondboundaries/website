# How to make changes to TBB website
Can we add some instructions here to allow people who just understand a bit of HTML how to make content changes to the website?
Suggested topics:
* How to update production website from here
* How to change basic content
* Where to put downloadable files like PDFs (current code refers to https://docs.wixstatic.com) - and how to insert download links to those files in the content
* How to preserve existing old website links - for example, a link like https://www.talentbeyondboundaries.org/s/TBB-IT-Candidates-Packet.pdf should still work when we have switched to this new website

# Gulper
Ultimate badassery - makes life a lot easier when working with simple HTML/CSS/JS projects and static stuff. Uses [Nunjucks](https://mozilla.github.io/nunjucks/) templating engine.

## Packages used
* `gulp` - badassery itself
* `gulp-plumber` - prevents pipe/stream from breaking when compile errors occur
* `gulp-uglify` - JS minification
* `gulp-uglifycss` - CSS minification
* `gulp-sass` - Sass compiler
* `gulp-autoprefixer` - adds CSS vendor prefixes
* `gulp-rename` - self explanatory
* `run-sequence` - run tasks in a sequence
* `browser-sync` - injects CSS/JS assets when they change, syncs scroll/click events with all browsers/devices
* `gulp-nunjucks-render` - compiles Nunjucks templates into static HTML files, kicks ass
* `gulp-html-prettify` - makes sure indentation is consistent when Nunjucks templates are compiled
* `gulp-remove-empty-lines` - removes empty lines created after Nunjucks templates are compiled

## Setup guide
1. Run `npm install` to install package dependencies
2. Tweak `gulpfile.js` based on your needs or use it as-is
3. Run `gulp serve`
4. Voila!

---
### Todo
* Add `gulp-rev` to do CSS/JS revisioning (and `gulp-rev-replace`) and enable cache busting
* Add `.htaccess` from HTML5 Boilerplate for caching/gzipping
