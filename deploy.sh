#!/usr/bin/env bash

grunt build

git diff --quiet HEAD
CHANGES=$?


if [ ${CHANGES} -ne "0" ]; then
  echo "We need to commit changes"
  git add -A
  git commit -m "Pushing ${CIRCLE_BUILD_NUM} [ci skip]"
  git push
fi



git tag -a "v0.1.${CIRCLE_BUILD_NUM}" -m "v0.1.${CIRCLE_BUILD_NUM}"
git push origin --tags

