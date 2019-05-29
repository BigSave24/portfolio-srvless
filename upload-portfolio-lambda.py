import boto3
import StringIO
import zipfile
from botocore.client import Config
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:592339293101:deployPortfolioTopic')

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    try:
        portfolio_bucket = s3.Bucket('portfolio.kevinedmond.info')
        build_bucket = s3.Bucket('portfoliobuild.kevinedmond.info')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print 'Job Done!'
        topic.publish(Subject='Portfolio Deployed', Message='Portfolio deployed successfully!')
    except:
        topic.publish(Subject='Portfolio Deploy Failed!', Message='Your Portfolio was not deployed successfully!')
        raise

    return 'Hello from Lambda!'