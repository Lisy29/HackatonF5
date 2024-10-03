import logging
import logging.config
import csv
import os

LOGGING_CONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': '%(asctime)s [%(levelname)s] %(name)s: %(message)s'
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'standard',
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': 'backend/logging/log.csv',
            'formatter': 'standard',
            'mode': 'a',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
            'propagate': True
        },
    }
}

def setup_logging():
    # Create the logging directory if it doesn't exist
    os.makedirs(os.path.dirname(LOGGING_CONFIG['handlers']['file']['filename']), exist_ok=True)
    
    # Create the CSV file with headers if it doesn't exist
    log_file = LOGGING_CONFIG['handlers']['file']['filename']
    if not os.path.exists(log_file):
        with open(log_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['asctime', 'levelname', 'name', 'message'])
    
    logging.config.dictConfig(LOGGING_CONFIG)