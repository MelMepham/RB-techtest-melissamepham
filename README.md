# RedBubble I Love You <3 <3
### Thanks for the challenge!

## Title & Description
Hello RedBubble team, I have created a CLI program that takes two arguments and will calculate the amount of items and the price of your cart.

## Environments
ES6
Node.js v8.9.4

## System Dependencies & Configuration
I decided to keep this simple and do it with vanilla node and JS. I felt the problem was quite simple and instead of using node modules I wanted to give myself some more experience with node.

I have used jest for my test suite and nodemon so I can watch my test suite.
In the console download dependencies by writing in your CLI ```yarn``` or ```npm install```

## Operating Instructions
start the cart by writing ```node index '[cart json arg] [base price json arg]'``` 


## Testing Instructions
Jest test suite
to start test suite ```yarn test```

## Overview
I have been coding every day since I finished EDA, but I have mainly been focusing on the front end, when I recieved the assignment I was quite excited to move into a territory I felt less familar with, I have spent a lot of time just reading and learning, to not just finish the task at hand but to explore and learn.

Initially I felt really excited and a bit overwhelmed, I initially went in and set up my files, had a little look and decided I needed to take a step back. I then had a really good look at the instructions, and I was thinking too complicated. I talked to a friend James, and talked about what I was thinking and asked for a little bit of help disecting the task. 
After I felt like I had a better understanding I started building the CLI progam, and wrote a test to get the CLI taking two numbers and add them together. 

After I had completed this and had it working I then wrote some JSON data and made a function adding these together, this was a little more tricky, and I got stuck on the JSON syntax, but alas, google and trial and error got me there in the end. Having to parse the information was a little tricky. 
Once that was working I decided to automate it a little more for myself and add require in the JSON data I used from the examples that were given. I had to re-write a bit of the code and parse it differently, and then once that was working I started writing the functions to get the prices. the calculator was the easiest part. 
Of course, all of the different product-types have different options, things like colour is needed for the hoodies, but not with the stickers, so I figured out how to match the required fields, and added some pluralization into the total function for a better user experience. 

Once I felt like I had the basic functions working I passed it onto a friend Andrew and he peer reviewed it for me. After talking with Andrew I discovered I was thinking about the problem in a way that wasn't going to meet the requirements of the task. So I needed to go back and rewrite my code, after a lot of trial and error, youtubing and talking with friends and I managed to get my code working to allow the base-price input to be turned into an object that has stabilized the price calculation time. 
This has been quite a tough challenge, and I am learning tools and techniques I haven't used or had much experience with so it's been a massive learning experience, and really rewarding! I now am pretty good at reduce functions!

## Stuff to work on
* I would love to figure out how to do mock tests in jest and want to test a function that calls another page.
* There is an if/else function in the  I think could be refactored, would be nice to figure out how to make that one function.
* I know I need to work on the naming of my functions - this is something I need to work on long term.
* I have declared a lot of variables in some of the functions - would love figure out a cleaner way of doing this - it makes my function quite big..
* combineOne() - combineTwo() and combineWithNoOptions() could be one function.
* Because I was learning how to do the basePriceObj I didn't know what my tree was going to look like, so I did not start with tests, if I had more time I would re do this (and might still after anyway) in TDD - I started this project with TDD but with that file I did not actually know what I was looking for so I found it tough.
* I would love to get a bunch of more things to test - I did the main functions but I know that things within the functions can be tested, which would be overall benificial.
* Would also love to figure out how to name my progam so you don't have to go "node index"

## Contributing
Code never fails because of the code, it fails because of the people. I am a strong believer in team work, and how the strength of a person is based on the strength of the community.
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

*Enspiral Dev Acadamy https://devacademy.co.nz/
*loomio https://www.loomio.org/
*Flux http://fluxfederation.com/
