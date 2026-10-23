import json
import boto3
import uuid
from datetime import datetime

s3 = boto3.client('s3')

BUCKET_NAME = 'blind-side-technologies-contact-storage-bdw'

def lambda_handler(event, context):

    body = json.loads(event["body"])

    submission = {
        "id": str(uuid.uuid4()),
        "timestamp": datetime.utcnow().isoformat(),
        "name": body.get("name"),
        "email": body.get("email"),
        "message": body.get("message")
    }

    filename = f"submission-{submission['id']}.json"

    s3.put_object(
        Bucket=BUCKET_NAME,
        Key=filename,
        Body=json.dumps(submission),
        ContentType='application/json'
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "message": "Submission saved successfully",
            "file": filename
        })
    }