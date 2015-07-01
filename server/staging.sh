COLOR='\033[1;35m'
NC='\033[0m' # No Color

printf "\n${COLOR}@@@@@@@@@@@@@@\nEngagement Lab World Bank API Staging Upload\n@@@@@@@@@@@@@@\n\n${NC}"

printf "\n>>>> Switching to staging branch\n"

git checkout staging

printf "\n>>>> Merging master branch into staging working tree\n"

printf "\n>>>> Copying /content to server root\n"

cp -R ../content .

printf "\n>>>> Adding content changes and committing \n"

# git add .
# git commit -m "Made staging commit from master head ($(git rev-parse HEAD))"

heroku config:set NODE_ENV=staging

git subtree push --prefix server heroku master

# export NODE_ENV=staging
# node ./node_modules/.bin/actionhero start