Deploying to GH pages:
on master branch always:

git add .
git commit -m'message here'

npm run deploy

git push -u origin master

in the event that we need to create a single page app (SPA) using react, and hosting on github, follow these instructions to prevent github pages from returning a 404 error in the event of a page refresh: https://github.com/rafgraph/spa-github-pages
