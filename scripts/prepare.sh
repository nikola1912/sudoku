#!/bin/sh

# Setup Husky if not already setup
if [ ! -f './.husky/_/husky.sh' ]; then
  npx husky install
fi

# Create .env file
cp .env.example .env