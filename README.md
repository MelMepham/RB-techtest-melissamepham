# RedBubble I Love You <3 <3
### Thanks for the challenge!
It's been such a great learning experience I secretly want to go to all the tech companies and ask them to send me their tech homework just so I have some dynamic challenges to solve!

## Title & Description
Hello RedBubble team, I have created for you a CLI program that takes two arguments, the first is a baseCart.json, my program with consume this and create an object that can be referenced, the cart.json is the second argument and this will go into the new object I created to find the items in question and calculate up the cart with a lovely bit of math that was kindly given to me by your team. 

## Environments
ES6

Node.js v8.9.4

## System Dependencies & Configuration
I decided to keep this simple and do it with vanilla node and JS. I felt the problem was quite simple and instead of using node modules I wanted to give myself some more experience with node.

I have used jest for my test suite and nodemon so I can watch my test suite.
In the console download dependencies by writing in your CLI ```yarn``` or ```npm install```

## Operating Instructions
Ttart the cart by writing ```node index '[base price json arg] [cart json arg]'``` 
There are two mock files that have been created so if you write ```node index ./data/basePrices.json ./data/cart9363.json``` you will automatically be able to see that yes indeed my code is WORKING!


## Testing Instructions
Jest test suite
to start test suite ```yarn test```
The test suite is running from the data folder that is connected to my project.

## Overview
I have been coding every day since I finished EDA, but I have mainly been focusing on the front end, when I received the assignment I was quite excited to move into a territory I felt less familiar with, I have spent a lot of time just reading and learning, to not just finish the task at hand but to explore and learn.

Initially I felt really excited and a bit overwhelmed, I initially went in and set up my files, had a little look and decided I needed to take a step back. I then had a really good look at the instructions, and I was thinking too complicated. I talked to a friend James, and talked about what I was thinking and asked for a little bit of help dissecting the task. 
After I felt like I had a better understanding I started building the CLI program, and wrote a test to get the CLI taking two numbers and add them together. 

After I had completed this and had it working I then wrote some JSON data and made a function adding these together, this was a little more tricky, and I got stuck on the JSON syntax, but alas, google and trial and error got me there in the end. Having to parse the information was a little tricky. 
Once that was working I decided to automate it a little more for myself and add require in the JSON data I used from the examples that were given. I had to rewrite a bit of the code and parse it differently, and then once that was working I started writing the functions to get the prices. the calculator was the easiest part. 
Of course, all of the different product-types have different options, things like colour is needed for the hoodies, but not with the stickers, so I figured out how to match the required fields, and added some pluralization into the total function for a better user experience. 

Once I felt like I had the basic functions working I passed it onto a friend Andrew and he peer reviewed it for me. After talking with Andrew I discovered I was thinking about the problem in a way that wasn't going to meet the requirements of the task. So I needed to go back and rewrite my code, after a lot of trial and error, youtubing and talking with friends and I managed to get my code working to allow the base-price input to be turned into an object that has stabilized the price calculation time. 

This has been quite a tough challenge, and I am really proud of myself for what I have achieved. I have been coding for about 4 months, and I feel (after working my way through this challenge) equipped to be solving real world problems. I know this code is not perfect, and are deffinately things I could work on, some bits shouldn't be hard coded, and the testing suite could be better (it does however hit 100% of the code) and I know I have so much more to learn. If this was the challenge I was given for the tech test I am excited at the idea of how much I will be pushed and how much I cwill learn if I do join your team at RedBubble. 

I would love feedback on the code, and hints or ideas on how I could make it better! If I do join your team I know you wouldn't have space for me until July/August and I plan to keep coding and would love your help to learn your stack and better equip myself for when the time comes.

Thank you SO MUCH!

## Stuff to work on
* [X] Do some mock tests in jest to test a function that calls another page.
* [ ] There is an if/else function in the  I think could be refactored, would be nice to figure out how to make that one function.
* [ ] That function is also relying on options name, I need to instead find the index and use the first option first, second option second without using names.
* [ ] I know I need to work on the naming of my functions - this is something I need to work on long term.
* [ ] I have declared a lot of variables in some of the functions - would love figure out a cleaner way of doing this - it makes my function quite big..
* [ ] combineOne() - combineTwo() and combineWithNoOptions() could be one function.
* [ ] Because I was learning how to do the basePriceObj I didn't know what my tree was going to look like, so I did not start with tests, if I had more time I would re do this (and might still after anyway) in TDD - I started this project with TDD but with that file I did not actually know what I was looking for so I found it tough.
* [ ] I would love to get a bunch of more things to test - I did the main functions but I know that things within the functions can be tested, which would be overall beneficial.
* [ ] Would also love to figure out how to name my program so you don't have to go "node index"
* [ ] I am also learning Ruby at the moment, so redoing this code in Ruby (when I have a better grip on Ruby) could be a really great exercise!
* [ ] I have created a dataTest file - would like to link that to the test suite instead of hardcoding that data

## Contributing
Code never fails because of the code, it fails because of the people. I am a strong believer in teamwork, and how the strength of a person is based on the strength of the community.
I am really lucky to have such an amazing group of people around me, supporting me and looking at my code, giving me constant feedback and allowing me to ask questions. below are a list of people that have helped me over the past couple of days, and their contribution. If you would like to talk with any of them I would be happy to pass on their contact details.

#### James Kiesel
James is a dev that works out of EDA* for a company called loomio*.
The brief was a little confusing and I was thinking too big, James and I had a zoom chat for about 15 minutes and I talked through the problem and he helped me come up with a good way to start tackling the problem.

#### Andrew Stoic
Andrew is a senior Dev at Flux* in Wellington. He has helped peer review my code and be a good support for me through the process of both EDA and looking for work. Andrew also helped me understand the comSci side of program optimization with code (no nested for loops here!).

#### Ross Jourdain
Ross was a tutor of mine at EDA* and is now a bit of a mentor. 
 
#### Jess Draper
Jess was apart of my Cohort at EDA*, we are both searching for work and have a project we want to create together, we have been giving each other a lot of emotional support over the last couple of weeks and she has helped by being in my corner and being super supportive! (we were also both working on tech assignments at the same time which was great!, we were both able to be super empathetic)

#### Random internet person 
So I am hooked into a code-help-desk slack page, and I did ask some questions about little bits I was stuck on and was pushed to rewrite the code using .reduce functions! and thanks to this person my code is so much nicer and functional.

* *Enspiral Dev Academy https://devacademy.co.nz/*
* *loomio https://www.loomio.org/*
* *Flux http://fluxfederation.com/*

