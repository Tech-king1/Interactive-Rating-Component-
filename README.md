# Interactive-Rating-Component-

<h2>Users should be able to:</h2>

- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
- See hover and focus states for all interactive elements on the page

<h2>Built With:</h2>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<h2>Process:</h2>

To create the rating buttons and to ensure that they were fully accessible, they were built ⚒️ using a form along with five radio inputs (each with their own label); this also prevents users from making more than one selection.

To announce any changes, when the thank you screen appears, I wrapped the "thank you" content in its own container along with a aria-live="polite".

For the JS, my eventListener is on the form as a submit.
