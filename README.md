## wincat
wincat is program which help you to see the content inside the file and also edit the file content in the windows terminal and also help to formatting the file content using the appropriate flags, wcat also enable you to append the content and also copy the content of the file to the another files, These feature is present in the linux/ unix system but no present in the windows. so this program is useful for them, it was written in JavaScript and the environment used is NodeJS.

#Approch
1. wincat -s filepath => convert big line breaks into a singular line break ✅

2. wincat -n filepath => give numbering to all the lines ✅

3. wincat -b filepath => give numbering to non-empty lines ✅

4. wincat filepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist.✅

5. wincat filename2path >> filename2path => append all the content of filename into filename2 ✅

6. node wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2 ✔ We can mix and match the options. ✅

#Edge Case

1. If file entered is not found then it gives file does not exist error.✅

2. -n and -b are 2 options available together then command should give you an error✅
