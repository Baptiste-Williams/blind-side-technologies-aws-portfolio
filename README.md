# Blind Side Technologies AWS Portfolio Project

## Overview

This project was completed for my AWS Architecture Portfolio Project in CS 79C at Santa Monica College.

The goal of this project was to design and deploy a serverless web application using AWS services. I built a website for Blind Side Technologies and created a backend that allows visitors to submit contact information without requiring traditional web servers.

The project demonstrates how multiple AWS services can work together to create a secure, scalable, and cost-effective cloud solution.

## Architecture Diagram

The diagram below shows the overall architecture used for this project.

<img width="1087" height="606" alt="image" src="https://github.com/user-attachments/assets/f7de51bb-e3ad-49b6-a8ae-6cb363ccbc35" />


## Project Architecture

```text
User
 │
 ▼
CloudFront
 │
 ▼
S3 Static Website

Contact Form
 │
 ▼
API Gateway
 │
 ▼
Lambda
 │
 ▼
S3 Contact Storage
```

The website is hosted in Amazon S3 and delivered through CloudFront. When a visitor submits the contact form, the request is sent to API Gateway, which triggers a 
Lambda function. The Lambda function processes the request and stores the data as a JSON file in a private S3 bucket.

## Live Website
The Blind Side Technologies website is hosted in Amazon S3 and delivered through CloudFront.

<img width="1918" height="1078" alt="Live website in browswer" src="https://github.com/user-attachments/assets/05e2c031-66c9-4674-9ed8-33951976c1fb" />



## AWS Services Used

- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda
- AWS IAM
- AWS CloudFormation

## Why I Chose These Services

### Amazon S3

I used Amazon S3 to host the website because it contains static content and does not require a traditional web server. S3 is simple to configure, highly available, and cost-effective.

### Amazon CloudFront

CloudFront provides HTTPS encryption and improves website performance by serving content through AWS edge locations.

### Amazon API Gateway

API Gateway acts as the entry point for contact form requests and integrates directly with Lambda.

### AWS Lambda

Lambda processes contact form submissions without requiring server management. Since the code only runs when a form is submitted, it helps keep operating costs low.

### AWS IAM

IAM was used to securely manage permissions between AWS services and to implement least-privilege access.

### AWS CloudFormation

CloudFormation was used to demonstrate Infrastructure as Code (IaC) by defining AWS resources through a template instead of creating everything manually.

## CloudFront Deployment
CloudFront was configured to provide HTTPS access and improve performance for website visitors.

<img width="1912" height="1078" alt="cloudfront-working" src="https://github.com/user-attachments/assets/22e82551-5563-49f0-8d3f-3f828a938e6c" />




## What This Project Demonstrates

This project demonstrates several concepts covered throughout the course:

- Static website hosting with Amazon S3
- Content delivery through CloudFront
- Serverless computing with AWS Lambda
- API creation with API Gateway
- IAM roles and permissions
- Infrastructure as Code using CloudFormation
- Integration between multiple AWS services
- Troubleshooting and deploying cloud-based solutions

One of the main goals of this project was to build a complete AWS architecture instead of working with individual services separately.

## Security

Security was considered throughout the project design.

Security measures implemented include:

- IAM roles instead of hard-coded credentials
- Least-privilege permissions for Lambda
- HTTPS encryption through CloudFront
- Private S3 bucket for contact form submissions
- API Gateway serving as the controlled entry point for requests

## Challenges Encountered

### CloudFront 504 Gateway Timeout

The CloudFront distribution deployed successfully but initially returned a 504 Gateway Timeout error.

After troubleshooting the origin configuration, I discovered that the Origin Protocol Policy was configured incorrectly. Changing the policy to HTTP Only resolved the issue and allowed CloudFront to communicate correctly with the S3 website endpoint.

### Lambda KeyError: 'body'

While testing Lambda, the function returned a KeyError related to the body field.

This occurred because the default Lambda test event did not match the format used by API Gateway. 
Creating an API Gateway-style test event resolved the error and allowed successful testing.

## Backend Testing
Before integrating with the website, the Lambda function was tested independently to verify successful execution.

<img width="1918" height="1078" alt="lambda-test-success" src="https://github.com/user-attachments/assets/b1ed22f8-08c8-4f97-b6dd-ab7d6ac44cdb" />





## Lessons Learned

Building this project helped me better understand how AWS services communicate with each other within a real-world architecture.

Some of the most valuable lessons included:

- Configuring S3 permissions for static website hosting
- Troubleshooting CloudFront deployment issues
- Integrating API Gateway with Lambda
- Managing IAM permissions using least-privilege access
- Testing serverless applications with realistic events
- Using CloudFormation to define infrastructure as code

## Deployment Steps

The following steps can be used to recreate a similar environment.

### Step 1: Create the Website Bucket

- Create an Amazon S3 bucket
- Enable Static Website Hosting
- Upload website files
- Configure bucket permissions

### Step 2: Configure CloudFront

- Create a CloudFront distribution
- Use the S3 website endpoint as the origin
- Configure the Default Root Object as index.html
- Verify website accessibility through CloudFront

### Step 3: Create the Lambda Function

- Create a Lambda function using Python
- Add code to process contact form submissions
- Configure IAM permissions

### Step 4: Create API Gateway

- Create an HTTP API
- Create a POST route
- Connect the route to Lambda
- Configure CORS settings
- Deploy the API

### Step 5: Create Contact Storage

- Create a private S3 bucket
- Grant Lambda permission to write objects
- Update Lambda code to store submission data

### Step 6: Connect the Frontend

- Update the JavaScript fetch request
- Add the API Gateway endpoint
- Upload updated website files

### Step 7: Test the Application

- Access the CloudFront URL
- Submit a contact form
- Verify Lambda execution
- Verify JSON files are created in the storage bucket

## Infrastructure as Code

A CloudFormation template was created to define and document the AWS resources used by this project.

The template includes:

- S3 Website Bucket
- Contact Storage Bucket
- IAM Role
- IAM Policy
- Lambda Function
- API Gateway Resources

### CloudFormation Template

<img width="880" height="408" alt="image" src="https://github.com/user-attachments/assets/9d132c42-14a9-43f8-b8b8-1cfe11487189" />


The full template is available in the "cloudformation"  folder.
Using CloudFormation made and can make the environment easier to document and reproduce.

## Evidence

The evidence folder contains screenshots of deployyment
- CloudFront configuration
- Lambda testing
- API Gateway configuration
- S3 contact storage
- CloudFormation resources
- End-to-end application functionality

## How I Would Improve This Project

If I continued working on this project, I would focus on improving areas that were covered in this course.

Possible improvements include:

- Improving contact form validation
- Creating additional Lambda functions for website features
- Expanding CloudFormation templates
- Adding more monitoring and logging
- Improving application error handling
- Further refining IAM permissions and security controls

## Author

Baptiste Williams

Santa Monica College

CS 79C – Compute Engines in Amazon Web Services

Fall 2026
