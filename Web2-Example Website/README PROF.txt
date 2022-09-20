Professor:

I have added a few external sources of data in my webpage to make it look a bit better. You can find all the external resources I've used in the "vendors"
folder. I also added some font icons from a js exteral link that you can find in bottom of the code right before the end of the body. 

I felt like I had to go the extra mile on this one so I did. I followed a course that you can find in the link below. I will give you an idea of the
steps I took to create my site. I modified everything to fit my desired website goal but a lot of the tricks and external sources I implemented where from
that course.

https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/

I'm currently working on my php portion and you might be able to see the beginings of it if you open the index. A commented out section. it will be a login
area where I will also implement my database for login information and either a schedule for visits (pretty much a calendar database that will allow
customers to select a time and date for a meeting while blocking out dates) or something more along the lines of customize your bundle and record it to the
database.



-Week 4-

The main part I would like you to focus on is the new login.php. I moved everything from the index.html to here as to simplify my life and make it as organic
as posible. Lines 45 through 65 are the main code that checks for errors and replies with an echo depending on the situation. it detect bad username,
password and both as separate if statements. This will be part of the code I extend to add my SQL for users. I will also add a registration page where 
the website can interact with the database by adding new usernames and passwords. 

Please note, I also added the missing java code from previous week, saved it, and resubmitted it. Also added the images to the Week3 screenshots. I will 
continue to add screenshots to individual folders as to not clutter the source folder. 



--Week 5--

This was really a pain to set up. I was having issues differentiating mysql with mysqli and took me longer than expected to create this database association.
You might see a bunch of artifacts or chunks of code that I either tried to make work or forgot to delete. I also added an export copy of the database I'm 
working at the moment. the main thing with it is that it is a user account specific login. I will also add the email as login option as well as the register
database and hopefully a custom purchase option by the end of this weekend. I was quite anoyed when after a full 3 days of trying to get the database to
connect throught php, I was able to condence about 100 lines of jumbled code into just what you see in the database-link.php. but I guess that's the name of the
game in this. 

The accounts should be as follow on the database:

kentyiro <> 123qwe456rty
prof.tran <> 123456

As of now, these are the only two credentials that the website should redirect successfully to the success.php. I also added some quick javascript to warn
about faulty username or passwords as well as checksums to verify that a sesssion is being activated before the success.php redirect to the index.html

This redirect will change to a buy service page once I get that code going for the last week and I hope I can get to it in time. 

The database created for this project is attached in this project and it is named hyperion_database. I believe it is short enought to have it being here and 
not on a separate file. 



--Week 7--

Welp... this is as much as I was able to pull off professor. The registration form itself took me way too long to complete but I was able to do it along
with some checks to ensure that things like the password are the same and many of the "user only" pages were only accessible after a session had been 
established. I was also able to make a ghetto ass database fill that will allow the users to leave fields in blank because I kept getting a null error
if they were left blank. I also tried to check the database for username or email duplicates but failed misserably to pull the data from the database. I 
kept getting a null error that I wasn't able to fix so I just let the database do the check for me with an if statement that if it fails, it just goes bakc
and gives an alert. 

Above that I cleaned a lot of the pages and created new ones for such as memebers, and a logout php to kill the session. You'll be able to see the check
at the top of the code. A simple session start and a check to make sure that the username array is set so the page fills up. I know that security wise, 
this is possibly the worst website and I need a lot more scripting to do in order to secure it but I did the best I could when it comes to the assignment
prompts. I hope your happy with it and thanks again for allowing me to turn this in so late. 

Please make user you do the following to experience as best as you can the user side of my website

Login > Not a member? Sign Up > Fill and wait for index.html > Login > Use registered credentials > wait > done!

Following this pattern will show how the database interact both with the user_information and the user_login table as well as take your thought the script
for the website in one go. also, try using wrong passwords, or not inputing required fields to check all the error checking in the site. idk go nuts. 
If I did everything right, there should not be any reason the database gets errored out. If it does, well I guess you found what I couldn't. 