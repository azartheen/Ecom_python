config = {

        # AWS credentials for the IAM user (alternatively can be set up as environment variables)
        'aws_access_key': 'AKIAIGXF75QJLTX4NO7Q',
        'aws_secret_key': 'narqwR4jFZYFycm3N+yeTX9feqKo55AyZymKQ9xG',

        # EC2 info about your server's region
        'ec2_region_name': 'us-west-1',
        'ec2_region_endpoint': 'ec2.us-west-1.amazonaws.com',

        # Tag of the EBS volume you want to take the snapshots of
        'tag_name': 'MakeSnapshot',
        'tag_value': 'True',

        # Number of snapshots to keep (the older ones are going to be deleted,
        # since they cost money).
        'keep_day': 5,
        'keep_week': 5,
        'keep_month': 6,

        # Path to the log for this script
        'log_file': '/tmp/makesnapshots.log',

        # ARN of the SNS topic (optional)
        #'arn': 'xxxxxxxxxx',

        # Proxy config (optional)
        #'proxyHost': '10.100.x.y',
        #'proxyPort': '8080'
    }