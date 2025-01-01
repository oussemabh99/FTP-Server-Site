from ftplib import FTP
HOSTNAME = "172.17.0.2"
USERNAME = "anonymous"
PASSWORD = "anonymous"
ftp_server = FTP(HOSTNAME, USERNAME, PASSWORD)
ftp_server.encoding = "utf-8"
ftp_server.dir()

# Enter File Name with Extension
filename = "test-ftp.txt"

# Write file in binary mode
with open(filename, "wb") as file:
    # Command for Downloading the file "RETR filename"
    ftp_server.retrbinary(f"RETR {filename}", file.write)

