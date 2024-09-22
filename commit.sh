#!/bin/bash

# ⚠️ Make sure to make this file executable
# chmod +x commit.sh

# Stage all changes
git add .

# Prompt for commit message using VSCode
echo -n "Enter commit message: "
read -e COMMIT_MESSAGE

# add flags to commit message. if -m flag includes commit msg then prefix msg with "New commit message: "
if [[ $COMMIT_MESSAGE == *"-m"* ]]; then
  COMMIT_MESSAGE=${COMMIT_MESSAGE/-m/}
  COMMIT_MESSAGE="New commit message: $COMMIT_MESSAGE"
fi

# if none of the flags passed add as a new -m flag
if [[ $COMMIT_MESSAGE != *"-m"* ]] && [[ $COMMIT_MESSAGE != *"-f"* ]] && [[ $COMMIT_MESSAGE != *"-b"* ]]; then
  COMMIT_MESSAGE="New commit message: $COMMIT_MESSAGE"
fi

if [[ $COMMIT_MESSAGE == *"-f"* ]]; then
  COMMIT_MESSAGE=${COMMIT_MESSAGE/-f/}
  COMMIT_MESSAGE="New feature ✨ : $COMMIT_MESSAGE"
fi

# add bug fix flag and msg to commit message
if [[ $COMMIT_MESSAGE == *"-b"* ]]; then
  COMMIT_MESSAGE=${COMMIT_MESSAGE/-b/}
  COMMIT_MESSAGE="Bug fix 🐞 : $COMMIT_MESSAGE"
fi

# Commit changes with the provided message
git commit -m "$COMMIT_MESSAGE"
