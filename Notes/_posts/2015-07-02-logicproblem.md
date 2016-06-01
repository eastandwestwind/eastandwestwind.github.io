---
title: Logic Exercise
---

Here is the problem:

Albert and Bernard just became friends with Cheryl, and they want to know when her birthday is. Cheryl gives them a list of 10 possible dates.

          May 15     May 16     May 19
         June 17    June 18
         July 14    July 16
       August 14  August 15  August 17


Cheryl then tells Albert and Bernard separately the month and the day of her birthday respectively.

Albert: I don’t know when Cheryl’s birthday is, but I know that Bernard does not know too.

Bernard: At first I don’t know when Cheryl’s birthday is, but I know now.

Albert: Then I also know when Cheryl’s birthday is.

So when is Cheryl’s birthday?

___________________________________________________________
Here is my answer:

If Albert knows that Bernard doesn’t know, you can deduct the following things:
If Bernard doesn’t know, Bernard was given a day of the month that is not unique in the list of 10 possible dates. Otherwise, Bernard would automatically know the birthday. This eliminates May 19 and June 18.

Because Albert knows that Bernard doesn’t know, the month that Albert knows only contains date options that are listed more than once in the given list of 10 possible dates. This eliminates the months of May and June, and leaves all options under July and August still open.

If Bernard then knows the birthday, the following is true:
Within the remaining options under July and August, the day must be unique. This eliminates July 14 and August 14, and leaves 3 remaining options: July 16, August 15, and August 17.

Because Albert now knows the birthday, we know that the month must be unique. The answer is July 16.