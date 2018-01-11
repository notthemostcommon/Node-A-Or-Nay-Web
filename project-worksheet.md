# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Fri| Game Idea, Wireframes and Priority Matrix|
|Day 2: Mon| Pseudocode\Actual code\Basic Clickable Model|
|Day 3: Tue| Working Prototype |
|Day 4: Wed| App Completed / Slides |
|Day 5: Thur| Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## MVP 
-create database and tables 

-search feature

-search results page 

-render watched 

-single page help

-rating with stars and store in db 

-create watch/delete watch

-aggregate ratings and render

-create watch page 

Include the full list of features that will be part of your MVP 

## POST MVP
-Historical grade chart 

-Comments

-Map 

-Update 

-Authentication

Include the full list of features that you are considering for POST MVP

## Wireframes
http://res.cloudinary.com/themostcommon/image/upload/v1515447318/IMG_9281_qay66k.jpg

http://res.cloudinary.com/themostcommon/image/upload/v1515447322/IMG_7062_owp3vz.jpg

http://res.cloudinary.com/themostcommon/image/upload/v1515447325/IMG_0694_lqym7c.jpg
Include images of your wireframes. 

## App Components

### Creating Items


### Deleting Items


### Editing Items


### Getting Items



## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| create database | H | 1hr | 1hr | |
| search feature | H | 3hrs | 12hrs | |
| render violations | H | 2hrs | 2hrs | |
| create watched page | H | 2hrs | |  |
| render watched page | H | 1hrs | | |
| single page help | H | 2hrs | 1hrs | |
| rating with stars | H | 3hrs | 1hr |  |
| create watch and store | H | 3hrs | | |
| logic for filtering location response | H | 3hrs| 1 hrs | |
| aggregate ratings and render | H | 2hrs | | |
| user auth | H | 3hrs | 5hrs | |
| log out | H | 1hr | 2hrs| | 
| use ajax for ratings and favorites | H | 4hrs | | |
| add google maps search | H | 3hrs | 
| add google maps to results | H | 2hrs | 





## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Anonymous | Allow user access without logging in | 
| Logout | Plugin to easily log out | 


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 -Search feature 
 
 -User Auth: simple copy and paste and changing didn't work, had issues troubleshooting bc i didn't understand what was going on so spent time trying to learn the different modules. Ultimately, the issue was the bodyparser.json I had grabbed from a previous file was wrong. I needed to remove the .json and worked.  
 
 -req.user - grab and send to the back/ render on the front end 
 
 - posting to favorites to db - values posting as null 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
