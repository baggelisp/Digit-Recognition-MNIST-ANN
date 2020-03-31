FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python3-pip python-dev build-essential

WORKDIR /usr/src/app/
COPY . .

RUN pip3 install -r requirements.txt --upgrade

EXPOSE 5000

CMD python3 app/main.py