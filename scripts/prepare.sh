#!/bin/sh

if [ ! -f './.husky/_/husky.sh' ]; then
  npx husky install
fi