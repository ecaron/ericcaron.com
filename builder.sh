#!/bin/bash
oldPackageHash=`tar -cf - package.json | md5sum`
oldSemanticHash=`tar -cf - semantic | md5sum`
git pull
newPackageHash=`tar -cf - package.json | md5sum`
newSemanticHash=`tar -cf - semantic | md5sum`

if [ "$oldPackageHash" == "$newPackageHash" ]; then
  echo "No change to package.json. Skipping NPM install"
else
  npm install
fi

if [ "$oldSemanticHash" == "$newSemanticHash" ]; then
  echo "No change to semantic director. Skipping gulp build"
else
  gulp build
fi

export AMP_SERVER=https://amp.ericcaron.com
export BUILD_NUMBER=`git rev-parse --short HEAD`
export MAIN_SERVER=https://ericcaron.com
BUILD_TYPE=main harp compile . www
BUILD_TYPE=amp harp compile . www-amp
