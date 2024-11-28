FROM ubuntu:latest
RUN apt update && apt install vsftpd -y
COPY ./vsftpd.conf /etc/
COPY ./test-ftp.txt /srv/ftp
ENTRYPOINT ["vsftpd"]

