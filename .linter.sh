#!/bin/bash
cd /home/kavia/workspace/code-generation/lupus-chronicles-exploring-wolf-behavior-ecology-and-conservation-95251-95257/lupus_chronicles
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

