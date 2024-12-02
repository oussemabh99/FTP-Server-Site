#!/bin/bash

# Start the vsftpd service
service vsftpd start

# Check if the /var/log/xferlog file exists
if [ ! -f /var/log/vsftpd.log ]; then
    # If the file doesn't exist, create the file
    touch /var/log/vsftpd.log
    echo "Log file created: /var/log/vsftpd.log"
else
    # If the file exists, display a message
    echo "Log file already exists: /var/log/vsftpd.log"
fi

# Tail the log file
tail -f /var/log/vsftpd.log

