provider "aws" {
  region = var.region
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "ubuntu" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type

  tags = {
    Name                 = var.instance_name
    "Linux Distribution" = "Ubuntu"
  }
}

resource "aws_s3_bucket" "asset_bucket" {
   bucket = "squares-static-asset-bucket"
   acl = "private"

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket" "log_bucket" {
   bucket = "superbowlsquares_logs"
  tags = {
    Name = "Log bucket"
  }
}
resource "aws_s3_bucket_object" "log_folder" {
  bucket       = "${aws_s3_bucket.log_bucket.id}"
  key          = "log/"
  content_type = "application/x-directory"
}

resource "aws_s3_bucket" "domain_bucket" {
   bucket = "superbowlsquaresapp.com"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  tags = {
    Name = "Web hosting bucket"
  }
  versioning {
    enabled = true
  }

  logging {
    target_bucket = aws_s3_bucket.log_bucket.id
    target_prefix = "log/"
  }
}

resource "aws_s3_bucket" "subdomain_bucket" {
   bucket = "www.superbowlsquaresapp.com"

  website {
    redirect_all_requests_to = "http://superbowlsquaresapp.com"
  }

  tags = {
    Name = "Redirect bucket"
  }
}