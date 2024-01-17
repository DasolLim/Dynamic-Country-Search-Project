# Dynamic Country Search Project with DOM Manipulation

## Objective:
Create an HTML page showcasing details of 20 countries, with two nifty search boxes for finding countries by name or currency code. JavaScript magic is involved in dynamically updating the content as you type.

## Features/Functionality:
1. **Country Showcase:** Your HTML page is a visual feast, displaying information on 20 countries.
2. **Dynamic Search:** Enjoy the convenience of two search boxes, allowing users to find countries by name or currency code.
3. **Input Validation:** Just like in Lab 1, input validation ensures a smooth user experience, preventing errors.

## Language and Tools:
1. **HTML:** The backbone of your project, creating the structure and content of the webpage.
2. **JavaScript:** Adding interactivity and dynamism to the page by modifying the DOM, updating content as users type, and creating new elements.
3. **Git:** Your trusty version control system. Use it wisely, create branches, and make meaningful commits. Push that code to Github!
5. **CSS (implicitly):** While not explicitly mentioned, styling the search results section implies the use of CSS to make it visually distinct.

## Website Display:
Hey there! Here's the quick visual display of my Fullstack Website Project!

### Home Page:
![MERN9](https://github.com/DasolLim/Dynamic-Country-Search-Project/assets/92288227/344bd037-1724-44e8-a172-ef63b529b31f)

### Dynamic Country Search:
![MERN10](https://github.com/DasolLim/Dynamic-Country-Search-Project/assets/92288227/7bafe2bb-fc30-4471-ac82-3fa07ceb0f64)

### Dynamic Currency Search:
![MERN11](https://github.com/DasolLim/Dynamic-Country-Search-Project/assets/92288227/57dca05b-fa2b-4d2f-bd3c-c803ddce608d)

# Setting Up a Website on Amazon AWS: A Simple Guide
Hey there, fellow engineering enthusiasts! 👋 As a 3rd-year university student diving into the AWS realm, let's walk through a breezy summary of how to upload your website to an AWS server.

## One-time Setup:
1. **AWS Academy Access:**
   - Click "Get Started" in the invitation email.
   - Create/login to your Canvas account.
   - Email the instructor if no invitation.
   - Set up your Canvas account.

## AWS Academy Login:
1. Go to [AWS Academy](https://awsacademy.instructure.com).
2. Click your course and navigate to "Modules."
3. Launch AWS Academy Learner Lab.
4. Start Lab, wait for AWS to turn green, note your balance.
5. Download SSH key from "AWS Details."
6. Click "AWS 🟢," open AWS console.

# Deploying My Website on AWS: A Step-by-Step
Greetings, fellow engineering pals! 👋 As a third-year student navigating the AWS landscape, let me share my journey on uploading my website to an AWS server. Here's a chill summary:

## One-time Setup:
1. **Getting AWS Academy Access:**
   - I hit the "Get Started" button in the email invitation.
   - Created or logged into my Canvas account.
   - Shot an email to the instructor when no invite arrived.
   - Set up my Canvas account.

## Logging into AWS Academy:
1. Headed to [AWS Academy](https://awsacademy.instructure.com).
2. Clicked on my course, hit up the "Modules" section.
3. Launched the AWS Academy Learner Lab.
4. Clicked "Start Lab," patiently waited for the green AWS light.
5. Downloaded the SSH key from "AWS Details."
6. Clicked "AWS 🟢" to open the AWS console.

## Web Server Setup on AWS:
### Step 1: Setting Up the Server (One-time setup)
1. Fired up the AWS Management Console.
2. Launched an instance, stuck with Amazon Linux.
3. Named my instance, kept things default, allowed SSH, HTTPS, and HTTP in the security group.
4. Clicked "Launch instance" and chilled till it turned "Running."
5. Copied the "Public IPv4 DNS" from the instance details.

### Step 2: My Journey In
1. Returned to AWS Academy, tapped into "Readme," and slid into the "SSH Access" link.

### Step 3: Rocking Updates and Nginx
1. After login, I went for the software update with `sudo yum update`.
2. Threw in Nginx with `sudo yum install nginx`.
3. Popped open the browser, tossed in the server name - got the expected timeout.
4. Sprinkled some magic - `sudo systemctl enable nginx` and `sudo systemctl start nginx`.
5. Refreshed the browser - Boom! "Welcome to nginx!"

### Step 4: My Website’s Grand Entrance
1. Dived into Nginx config with `sudo nano /etc/nginx/nginx.conf`.
2. Switched "root /usr/share/nginx/html;" to "root /var/www/webtech/html;".
3. Saved, crafted necessary folders.
4. Checked permissions, poured in my HTML, and hit Nginx with a restart.
