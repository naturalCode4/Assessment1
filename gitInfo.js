/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "An open-source version control system. Enables a user to take 'snapshots' of their work to be stored for reference and restoration. Versions are (...always? or is there another platform?...) saved on gitHub (which is a different thing! (see definition of gitHub below))."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "An cloud-based open-source website hosts git repositories. Users can view their 'snapshots' of their work they took on git. gitHub enables coders to network, browse, and collaborate with other coders and codes. gitHub is a website and database, whereas git is a software you download to a computer."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = "git init is used in a computer's command line to create a new repository. Can also be used to reinitialize an existing one."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = "git clone makes a copy (a clone, if you will) of an existing repository in a new directory. The git clone command line usually need more text, commonly the name of the repo and the directory where you want to copy it -- but there is other functionality"
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = 'git status lets you inspect changes to your working tree, including showing you which of the files in your directory are untracked/unsaved (not committed yet)'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = 'git add moves files from your working directory to the git staging area. Use git add . to add all files in current directory'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = 'git commit saves and uploads a version of your working directory to the repository on gitHub. Versions are stored and can be referenced and reverted to'
let gitCommitCode = "git commit -m 'initial commit'"
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = 'git push is used to upload content from your local repository to another one, usually a shared ("remote") repository. It is like you are publishing your work.'