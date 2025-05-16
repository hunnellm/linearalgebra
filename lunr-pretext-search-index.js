var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "Collected activities, forked from Chrissie Safranski's Matrix Theory  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thanks to 2025 AIM Workshop Open educational resources: adoption, curation, and customization and the experts who sacrificed their time.  "
},
{
  "id": "frontmatter-5-1",
  "level": "2",
  "url": "frontmatter-5.html#frontmatter-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Open educational resources: adoption, curation, and customization "
},
{
  "id": "sec-rref",
  "level": "1",
  "url": "sec-rref.html",
  "type": "Section",
  "number": "1.1",
  "title": "Reduced Row Echelon Form",
  "body": " Reduced Row Echelon Form   This page has activities to help practice the skills related the reduced row echelon form of a matrix, which contains a lot of the key information about many important features of the matrix.    Prepare  The simplest form of a matrix (at least for finding solutions to systems of linear equations is called the reduced row echelon form) or RREF of the matrix.   Reduced Row Echelon Form  reduced row echelon form  row echelon form   A matrix is in reduced row echelon form if its entries satisfy all four of the following conditions.   The first nonzero entry in each row is a (called a leading ). leading one     Each leading comes in a column to the right of the leading 's in rows above it.    All rows of all 's come at the bottom of the matrix.    If a column contains a leading , then all other entries in that column are .     A matrix that satisfies the first three conditions is said to be in row echelon form .     RREF or not?   For each of the following matrices, say whether they are in reduced row echelon form or not.            Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.                Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!               Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .               Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!       We began this section with two questions, Where do we go? and How do we get there quickly? We've just answered the first question: most of the time we are going to reduced row echelon form. We now address the second question.  There are many ways to use elementary row operations to transform a matrix into reduced row echelon form, but there is a general technique that is efficient and doesn't waste time on unnecessary steps. This technique is called Gauss-Jordan elimination , named in honor of the mathematicians Karl Friedrich Gauss and Wilhelm Jordan.   Gauss-Jordan Elimination  Gauss-Jordan elimination   Gauss-Jordan elimination is the technique for finding the reduced row echelon form of a matrix using the procedure summarized below:   Create a leading .    Use this leading to put zeros underneath it.    Repeat the above steps until all possible rows have leading 's.    Put zeros above these leading 's.      This is roughly what we were already doing in previous sections when we used elimination and row operations, but let's see an example.   Gauss-Jordan Elimination Demonstrated  Put the augmented matrix of the following system of linear equations into reduced row echelon form.   We start by converting the linear system into an augmented matrix.   Our first step is to make the first entry in the first row a . We do this by multiplying Row 1 by . (This row operation is also called scaling. )          Our next step is to put zeros under this . To create a for the first entry in the second row, we'll use the multiply and add elementary row operation.          The first entry in the third row is already , so our first column looks good for reduced row echelon form. We now shift our focus from the leading down and to the right, to the position that is boxed.  We want to put a in this position, but we need to restrict ourselves to using only the second row and any rows below it , as using the first row would put nonzero entries back into the first column and undo the work we just did. Let's first swap Row 2 and Row 3, and then scale the new second row (multiply it by a number) so that there is a in the desired position.                  We have now created another leading , this time in the second row. Our next desire is to put 's underneath it, but that's already done! Therefore we again shift our attention down and to the right to the next position in a box. We want that to be a , and so we multiply the row by .          This ends what we will refer to as the forward steps . Our next task is to use the \"multiply and add\" row operation to put zeros above the leading 's. This is referred to as the backward steps .                  This matrix is now in reduced row echelon form, and we can read off the solution to the original linear system as , and .   We now summarize and try to formalize the steps we performed.   Forward Steps Gaussian elimination forward steps    Start at the top left corner.    If the entry in the row and column that we are considering is , swap rows with a row below the current row so that the entry is nonzero. If this entry is and all entries below are , we are done with this column; move to the right and do this step again.    Since the entry we are considering is nonzero, multiply the current row by a number ( scale the row ) to make its first entry a .    Repeatedly use the multiply and add row operation to put 's underneath the leading .    Move down and to the right. Go back to step 2 and work on the new rows and columns until you run out of either rows or columns.     The above steps accomplish the following things:   The first nonzero entry in each row is a .    Each leading is in a column to the right of the leading 's above it.    All rows of all 's come at the bottom of the matrix.     Note that this means we have just put a matrix into row echelon form . The next steps finish the conversion into reduced row echelon form.   Backward Steps Gaussian elimination backward steps    Starting from the bottom rightmost leading , use the multiply and add row operation repeatedly to put zeros above the leading .    Continue this process by moving up and to the left to the next leading , repeatedly use multiply and add to put zeros above the leading . Repeat this step until every leading has zeros above in all the rows.     By following these Forward and Backward Steps , we make use of the presence of zeros to make the computations easier and more efficient.  Many authors call the forward steps Gaussian elimination , which puts a matrix into row echelon form, and the forward-and-backward steps together Gauss-Jordan elimination , which puts a matrix into reduced row echelon form. We will almost always want to obtain reduced row echelon form and will not make a big deal about the distinction between the names Gaussian and Gauss-Jordan.     Gauss-Jordan Steps   Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.     Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?      Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .        Given the matrix which entry do we focus on turning into a or next?            This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.        To turn the boxed entry below into a , which row operation do we perform?       Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .        To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?            No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .         Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?      Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .       Let's practice the Gauss-Jordan algorithm some more.   Another Gauss-Jordan Elimination   Use Gauss-Jordan elimination to put the matrix into reduced row echelon form, where     We start by wanting to make the entry in the first column and first row a . To do this we'll scale the first row by a factor of .          Next we need to put zeros in the column below this newly formed leading .          Our attention now shifts to the right one column and down one row to the position indicated by the box. We want to put a in that position. Our only options are to either scale the current row or to interchange rows with a row below it. However, neither of those options will change the into a in this case. Therefore, we shift our attention to the right one more column, to the .     We want to create a leading for this row, so we multiply by a nonzero number.          Next we use multiply and add to put a underneath this leading .          We would continue moving down and to the right, but since the third row is all 's, and there aren't any more rows, we are done with the forward steps.  Our next goal is to put a above each of the leading 's.          This final matrix is in reduced row echelon form.     Gauss-Jordan Elimination Again, this time with fewer words   Put the matrix into reduced row echelon form.    Here we will show all steps without explaining each one.                                                    We were inspired by solving systems of linear equations to put matrices into reduced row echelon form, in order to make the solution easy to see. Every time we've started with a linear system, there was exactly one solution, and the reduced row echelon form always had one particular form. However, we've also practiced putting matrices in reduced row echelon form without referring back to their corresponding system of linear equations, and we have seen various different ways that the reduced row echelon form of a matrix can look. Connecting different reduced row echelon forms with solutions to the corresponding linear system is the topic for next section.   Gauss-Jordan Elimination   Describe how to perform Gauss-Jordan elimination in your own words.  If it helps you to describe the process, you can make up a specific matrix to use, or use an arbitrary one like .      Parsons Problem, Reduced Row Echelon Form   Perform Gauss-Jordan elimination on matrix .                                                      Summary     A matrix could either be in reduced row echelon form or not. There are four conditions, concerning the locations of zero and nonzero entries, that must all be true for a matrix to be in reduced row echelon form.     Gauss-Jordan elimination is an algorithm that uses elementary row operations to efficiently transform a matrix into reduced row echelon form.    Matrices in reduced row echelon form are useful for finding the solution to a system of linear equations.      Practice        Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.           Reduce the matrix to reduced row-echelon form.            "
},
{
  "id": "subsec-rref-bc-2",
  "level": "2",
  "url": "sec-rref.html#subsec-rref-bc-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form) RREF "
},
{
  "id": "def_rref",
  "level": "2",
  "url": "sec-rref.html#def_rref",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Reduced Row Echelon Form.",
  "body": " Reduced Row Echelon Form  reduced row echelon form  row echelon form   A matrix is in reduced row echelon form if its entries satisfy all four of the following conditions.   The first nonzero entry in each row is a (called a leading ). leading one     Each leading comes in a column to the right of the leading 's in rows above it.    All rows of all 's come at the bottom of the matrix.    If a column contains a leading , then all other entries in that column are .     A matrix that satisfies the first three conditions is said to be in row echelon form .   "
},
{
  "id": "rref-or-not-examples",
  "level": "2",
  "url": "sec-rref.html#rref-or-not-examples",
  "type": "Activity",
  "number": "1.1.2",
  "title": "RREF or not?",
  "body": " RREF or not?   For each of the following matrices, say whether they are in reduced row echelon form or not.            Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first nonzero entry in each row is a , each leading 1 appears down and to the right from the previous leading 1, and all the entries in the same column as a leading 1 are .  The third column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The rref conditions don't say that leading 1's have to exist; the conditions say that if nonzero entries are present, then leading 1's have to be in certain relative positions.               Reduced row echelon form    Correct!      Not in reduced row echelon form    The second column does not have a leading 1 in it, but that's okay; the conditions for rref don't say that every column has to contain a leading 1.                Reduced row echelon form    The third condition in says that any rows of all zeroes must be at the bottom.      Not in reduced row echelon form    Correct!               Reduced row echelon form    The first nonzero entry of the second row is , and it needs to be to be in rref. (The third row fails this condition also).      Not in reduced row echelon form    Correct!               Reduced row echelon form    Correct!      Not in reduced row echelon form    The first, third, fourth, and sixth columns do not have a leading 1 in them, and that means that the other entries in those columns don't have to be .               Reduced row echelon form    The second column has a leading in it (from the second row), and that means all the other entries in that column have to be .      Not in reduced row echelon form    Correct!      "
},
{
  "id": "def_gaussian_elimination-3",
  "level": "2",
  "url": "sec-rref.html#def_gaussian_elimination-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Jordan elimination "
},
{
  "id": "ex_gaussian_elimination",
  "level": "2",
  "url": "sec-rref.html#ex_gaussian_elimination",
  "type": "Example",
  "number": "1.1.3",
  "title": "Gauss-Jordan Elimination Demonstrated.",
  "body": " Gauss-Jordan Elimination Demonstrated  Put the augmented matrix of the following system of linear equations into reduced row echelon form.   We start by converting the linear system into an augmented matrix.   Our first step is to make the first entry in the first row a . We do this by multiplying Row 1 by . (This row operation is also called scaling. )          Our next step is to put zeros under this . To create a for the first entry in the second row, we'll use the multiply and add elementary row operation.          The first entry in the third row is already , so our first column looks good for reduced row echelon form. We now shift our focus from the leading down and to the right, to the position that is boxed.  We want to put a in this position, but we need to restrict ourselves to using only the second row and any rows below it , as using the first row would put nonzero entries back into the first column and undo the work we just did. Let's first swap Row 2 and Row 3, and then scale the new second row (multiply it by a number) so that there is a in the desired position.                  We have now created another leading , this time in the second row. Our next desire is to put 's underneath it, but that's already done! Therefore we again shift our attention down and to the right to the next position in a box. We want that to be a , and so we multiply the row by .          This ends what we will refer to as the forward steps . Our next task is to use the \"multiply and add\" row operation to put zeros above the leading 's. This is referred to as the backward steps .                  This matrix is now in reduced row echelon form, and we can read off the solution to the original linear system as , and .  "
},
{
  "id": "rref-steps",
  "level": "2",
  "url": "sec-rref.html#rref-steps",
  "type": "Activity",
  "number": "1.1.4",
  "title": "Gauss-Jordan Steps.",
  "body": " Gauss-Jordan Steps   Answer the following questions about using Gauss-Jordan elimination, which entries to work on next and what row operations to perform.     Given the matrix the Gauss-Jordan algorithm starts by turning the that is entry , into a . Which row operation do we use?      Scaling (multiplying a row by a nonzero number)    Correct!      Swapping rows    Swapping Row 1 and Row 2 would actually work for this matrix, and we'd end up in the same rref eventually. But part of the beauty of the Gauss-Jordan procedure is that following the prescribed steps of the algorithm always works, and swapping two rows won't always work to turn a into a .      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .        Given the matrix which entry do we focus on turning into a or next?            This entry is already a as required by the Gauss-Jordan method.            Correct! We need to turn the entries below the leading in Row 1 into 's.            No, we finish putting 's below the leading in the first column before moving to the right.        To turn the boxed entry below into a , which row operation do we perform?       Scaling a row    No, scaling a row means multiplying by a nonzero number which won't result in a if we didn't start with a .      Swapping rows    In this case, swapping Row 2 and Row 3 would put a into position , but that won't always work, and it just moves the problem down a row.      Multiply and add    Correct! Multiplying Row 1 by and adding to Row 2 will create a in position .        To continue the Gauss-Jordan algorithm on the matrix below, which entry do we next try to turn into a or ?            No, entry is the entry boxed below. The Gauss-Jordan algorithm says that after finishing a column, we move down and to the right from the leading .            No, entry is the entry boxed below. It's already a below a leading .            Correct! The next step in the Gauss-Jordan algorithm is to turn entry , which is boxed below, into a .         Given the matrix which row operation do we use next in the Gauss-Jordan algorithm?      Scaling a row    Correct!      Swapping rows    No, swapping rows is only used when there is a with nonzero entries below it.      Multiply and add    We use the multiply and add row operation when we are trying to get 's, not when our goal is to get a .      "
},
{
  "id": "ex_rref_2",
  "level": "2",
  "url": "sec-rref.html#ex_rref_2",
  "type": "Example",
  "number": "1.1.5",
  "title": "Another Gauss-Jordan Elimination.",
  "body": " Another Gauss-Jordan Elimination   Use Gauss-Jordan elimination to put the matrix into reduced row echelon form, where     We start by wanting to make the entry in the first column and first row a . To do this we'll scale the first row by a factor of .          Next we need to put zeros in the column below this newly formed leading .          Our attention now shifts to the right one column and down one row to the position indicated by the box. We want to put a in that position. Our only options are to either scale the current row or to interchange rows with a row below it. However, neither of those options will change the into a in this case. Therefore, we shift our attention to the right one more column, to the .     We want to create a leading for this row, so we multiply by a nonzero number.          Next we use multiply and add to put a underneath this leading .          We would continue moving down and to the right, but since the third row is all 's, and there aren't any more rows, we are done with the forward steps.  Our next goal is to put a above each of the leading 's.          This final matrix is in reduced row echelon form.   "
},
{
  "id": "ex_rref_3",
  "level": "2",
  "url": "sec-rref.html#ex_rref_3",
  "type": "Example",
  "number": "1.1.6",
  "title": "Gauss-Jordan Elimination Again, this time with fewer words.",
  "body": " Gauss-Jordan Elimination Again, this time with fewer words   Put the matrix into reduced row echelon form.    Here we will show all steps without explaining each one.                                                   "
},
{
  "id": "rq-gauss-jordan-summary",
  "level": "2",
  "url": "sec-rref.html#rq-gauss-jordan-summary",
  "type": "Reading Question",
  "number": "1",
  "title": "Gauss-Jordan Elimination.",
  "body": "Gauss-Jordan Elimination   Describe how to perform Gauss-Jordan elimination in your own words.  If it helps you to describe the process, you can make up a specific matrix to use, or use an arbitrary one like .    "
},
{
  "id": "parsons-perform-gauss-jordan",
  "level": "2",
  "url": "sec-rref.html#parsons-perform-gauss-jordan",
  "type": "Reading Question",
  "number": "2",
  "title": "Parsons Problem, Reduced Row Echelon Form.",
  "body": " Parsons Problem, Reduced Row Echelon Form   Perform Gauss-Jordan elimination on matrix .                                              "
},
{
  "id": "rref_performgauss2",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss2",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "   Reduce the matrix to reduced row-echelon form.   First, do , resulting in  Then, do , resulting in Next, do , resulting in  Now we can multiply by a constant to create the leading 1, and then do the backwards steps.       "
},
{
  "id": "rref_performgauss3",
  "level": "2",
  "url": "sec-rref.html#rref_performgauss3",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "   Reduce the matrix to reduced row-echelon form.       "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
