---
title: My Regex Reference
slug: regex
date: 2019-03-13T19:11:07.872Z
category: Web Dev
description: >-
  This is just a reference I can easily find to deal with regular expressions in
  Javascript. 
imageLink: 95YRwf6CNw8
imageAttribute: 'https://unsplash.com/photos/95YRwf6CNw8'
---
_I will iterate on this at some point in the future. For now, it's just a quick reference for me to find certain regex patterns that I use at work._

{{< highlight js >}}

.test()

regexExpression.test(valueToTest);

{{< /highlight >}}



## Test _Exact_ String

{{< highlight js >}}

let myString = "I ate the apple";

let the = /the/;

let THE = /THE/;

console.log(the.test(myString)); // true

console.log(THE.test(myString)); // false
{{< /highlight >}}




## Test _Multiple_ strings

{{< highlight js >}}

let multiString = /ate|apple/;

let multiStringFail = /eated|some|oranges/;

// console.log(multiString.test(myString)); // true

// console.log(multiStringFail.test(myString)); // false
{{< /highlight >}}




## Test & _Ignore Capitalization_

{{< highlight js >}}

// uses the i flag

let capitalization = /ATe/i;

// console.log(capitalization.test(myString)); // true
{{< /highlight >}}


{{< highlight js >}}
.match()

valueToTest.match(regexExpression);

{{< /highlight >}}


## Extract _Exact Matches_

{{< highlight js >}}

let myNewString = "Can extract a word from this text?";

let stringToExtract = /extract/;

// console.log(myNewString.match(stringToExtract)); // \['extract']
{{< /highlight >}}


## Find _Multiple Matches_

{{< highlight js >}}

let repeatedString = "Don't ever ever ever do that!";

let repeatMatch = /ever/g;

// console.log(repeatedString.match(repeatMatch)); //\[ 'ever', 'ever', 'ever' ]

{{< /highlight >}}



## _Wildcard Multiple_ Match

{{< highlight js >}}

let wildcard = "It's fun in the sun but don't burn your bun, hun!"

let wildcardMatch = /.un/g;

// console.log(wildcard.match(wildcardMatch)); //\[ 'fun', 'sun', 'bun', 'hun' ]
{{< /highlight >}}


## _Single Character, Multiple Possibilities_ Match

{{< highlight js >}}

let possibilities = "beg for a big bag for our bug bog";

let posMatch = /b\[aeiou]g/g;

// console.log(possibilities.match(posMatch)); //\[ 'beg', 'big', 'bag', 'bug', 'bog' ]

{{< /highlight >}}




## Match _All Letters in a String_

{{< highlight js >}}

let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /\[a-z]/ig;

// console.log(quoteSample.match(alphabetRegex)); // Matches every letter 
{{< /highlight >}}


## Match _Characters not Specified_

{{< highlight js >}}

let notSpecified = "3 blind mice.";

let nsRegex = /\[^aeiou0-9]/ig; // Change this line

// console.log(notSpecified.match(nsRegex)); // Change this line
{{< /highlight >}}
