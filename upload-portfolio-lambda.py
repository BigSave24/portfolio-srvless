import boto3
import StringIO
import zipfile
from botocore.client import Config
import mimetypes

def lambda_handler(event, context):
#         #### Setup connection to s3 account #Used with botocore.client#
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

#        #### Setup name and connection to s3 buckets
    portfolio_bucket = s3.Bucket('portfolio.kevinedmond.info')
    build_bucket = s3.Bucket('portfoliobuild.kevinedmond.info')

#       #### Download updated portfolio files
    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

#       #### Extract, open, upload files, and set ACL permissions
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    print "Job Done!"

    return 'Hello from Lambda!'
