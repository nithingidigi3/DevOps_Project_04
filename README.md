Table of Content:
1.	Goal
2.	Pre-Requisites
3.	Process Map
4.	Implementation
5.	Validation

Step-1: Goal
Deploy School web application on Apache server using AWS EC2 instance and automate the process with Jenkins.

Step-2: Pre-Requisites:
1.	Git Client - Tortoise Git
2.	Version Control Tool - GitHub
3.	CI Tool - Jenkins
4.	Build Tool - Maven
5.	Server - Apache

Step-3: Process Map:

![DevOps_Project_05_ProcessMap](https://user-images.githubusercontent.com/121715127/213105234-cc165023-42e7-424b-97cd-4ec80ecee7b7.png)

Step-4: Implementation
1. Created windows virtual machine by launching AWS EC2 instance.
2. Configuration and integration of VPC, Route table, Security groups, AWS S3 and RDS with EC2 instance.
3. Installed TortoiseGit on windows machine.
4. Initiated local Git repository and integrated with GitHub using TortoiseGit.
5. Updating source code changes to remote repository GitHub from local repository using TortoiseGit.
6. Installation of Maven and Jenkins tools on windows machine.
7. Performing build activities using Maven and Jenkins tools.
8. Automate the build process using Jenkins jobs.
9. Deploy the application package in Tomcat application server using shell script
10. Continuous integration of GitHub, Jenkins, Maven using Jenkins job.
11. Automate the process by triggering Jenkins with source code changes by activating webhooks in GitHub.
12. Configured AWS Load balancer and Autoscaling Group to make application always available in the web (to avoid server down issues)
13. DNS and SSL configuration using Route 53 and Certificate Manager

Step-5: Validation
1. Open Domain name in web
2. Make changes in GitHub and Check web for Auto-Update
