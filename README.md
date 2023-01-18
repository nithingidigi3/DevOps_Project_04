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

https://github.com/nithingidigi3/DevOps_Project_04/blob/main/DevOps_Project_04_ProMap.png?raw=true

Step-4: Implem4ntation.png
•	Created windows virtual machine by launching AWS EC2 instance.
•	Configuration and integration of VPC, Route table, Security groups, AWS S3 and RDS with EC2 instance.
•	Installed TortoiseGit on windows machine.
•	Initiated local Git repository and integrated with GitHub using TortoiseGit.
•	Updating source code changes to remote repository GitHub from local repository using TortoiseGit.
•	Installation of Maven and Jenkins tools on windows machine.
•	Performing build activities using Maven and Jenkins tools.
•	Automate the build process using Jenkins jobs.
•	Deploy the application package in Tomcat application server using shell script
•	Continuous integration of GitHub, Jenkins, Maven using Jenkins job.
•	Automate the process by triggering Jenkins with source code changes by activating webhooks in GitHub.
•	Configured AWS Load balancer and Autoscaling Group to make application always available in the web (to avoid server down issues)
•	 DNS and SSL configuration using Route 53 and Certificate Manager

Step-5: Validation
•	Open Domain name in web
•	Make changes in GitHub and Check web for Auto-Update
