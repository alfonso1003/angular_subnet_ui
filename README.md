# angular_subnet_ui

### How to run application
* To install the dependencies, you will need to use 'npm install' from your terminal.
* If running for the first time, run 'npm run build'
* After installation is finished use 'ng serve' to run the app.
  * If 'ng serve'does not work, try 'npm start'
  * As an alternative to 'npm start', try running 'npm install -g @angular/cli@latest'. You should then be able to run 'ng' commands.
* Then open your browser and go to http://localhost:4200
* More details on the project README: https://github.com/alfonso1003/angular_subnet_ui/blob/master/cidr/README.md

### Packages used:
* Angular-CLI - to build the app
* Bootstrap 3.3.7 - for the grid system

![Thumbnail](thumb.png)


### From requirements.txt
This was made as part of a job interview challenge. Below are the requirements:

Build an angular2 page.   Your project should run.   Send it to me in a zip when done, or send me a link to it if you put it an online git repository.   You are welcome to use any resource available to you to help get this task done.   I am a resource too, don't hesitate to email and ask me questions.   I'd suggest you download an angular2 starter project from angular.io, angular-university.io, etc.   That should get your angular2 app up and running.   Then:  using bootstrap, angular2 material design, etc. build a page to show the following data on the right side:   a list of subnets with their individual IPs like follows:
 
10.0.0.0/30
- 10.0.0.1
- 10.0.0.2
- 10.0.0.3
- 10.0.0.4
 
10.0.0.5/29
- 10.0.0.5
...
-10.0.0.12
 
 
192.168.1.0/27
- 192.168.1.1
- 192.168.1.2
...
- 192.168.1.32
 
 
and so on.    Add several subnets of different sizes.   Add expand and collapse to this menu where clicking on the subnet expands or collapses it to show or hide the individual IPs.   Expand/collapse is optional.  Define the data in a file named cidr.json.    Use http in the client controller to get the data.   You should be able to make a call like:  $http.get('/my/cidr/file/cidr.json') to simulate the GUI making an API call to get data.  If you build this out in a web server - where the client and server side both run, the client making calls into the server, then that is optional.
 
On the right side, when an individual IP is clicked, show the following details labels followed by their values:
 
IP:  (the ip seleccted)
Subnet:  (it's parent subnet)
SubnetMask:  i.e.  255.255.255.0
Hostname:   host1
 
and any other details you want to add in for extra show.
