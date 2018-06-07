# How to make changes to TBB website
* Change content by modifying the HTML and other files under the `src` directory.
* Downloadable files like PDFs are stored in `dist\s`. 
Images are stored in `dist\images`.  
* The gulp tasks (see below) process the files in `src`, 
constructing static HTML which is 
copied into the `dist` directory. `dist` (distribution) holds the content that 
is actually served up as the website.   
* Once the changes are made, push them to github (both the `src` and `dist`
directories). 
* The website is hosted from gh-pages of talentbeyondboundaries Github account - See https://help.github.com/articles/using-a-custom-domain-with-github-pages/ 
  
  The git command for pushing to gh-pages is:
  
  `git subtree push --prefix dist origin gh-pages`
  
  For more technical details on the hosting of the website see [this doc](https://docs.google.com/document/d/11b2mM3gAYk2aRGXQp8vJx0vMbO_Ht301SRuIfGFF2h0/edit#heading=h.gqh4mogqiiqn). 

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
