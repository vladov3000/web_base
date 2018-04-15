#!/bin/bash
#port 80 is mapped to port 3000 inside the container
docker run -v ~/web_base:/web_base -p 80:3000 -it web_base /bin/sh
