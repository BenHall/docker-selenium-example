docker pull vvoyer/docker-selenium-firefox-chrome:latest
docker run --name=selenium --privileged -p 4444:4444 -p 5999:5999 -d vvoyer/docker-selenium-firefox-chrome  
