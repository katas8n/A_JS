// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!HOMEWORK!!!!!!!!!!!!!!!!!!!!!!!
// 1. You have a form in HTML file.
// 2. You should find form 
// 3. Print every child of form to the console
// 4. Find every input in DOM ,but you can't use straight calls 
// : getElementByID  ,getElementByTagName ,getElementByClassName 
// , querySelector !
// 5. First name should be longer than 4 symbols  
// 6. Last name should be longer than 5 symbols  
// 7. Side must be dark 
// 8. IF form is correct u should print a modal window with 
// congratulations , otherwise u should tell user that there 
// is incorrect data.
// 9*. If data is incorrect light placeholders with a red color  
// 10*. If data is correct light placeholders with a lightblue color  

// const animal = {
//     name : "Mike Tyson"
// }

// console.log("Hello , " + animal.name );
// console.log(document);

// method
// const form = document.getElementsByTagName('form')[0];
// console.log('[FORM]',form);

// property
// const children = document.getElementsByTagName('form')[0].children;
// const spreadChildren = [...children]; // to common arrays 

// console.log('[CHILDREN]',children);
// console.log('[SPREAD_CHILDREN]',[...children]);

// Select algo
// 1. Get element from a page 
// 2. Save it in a variable 
// 3. Spread it : button input //!WITHOUT OUTER STRUCTURE 
// 4. Lead it to array 
// 5. Work with that as if it is array 

// console.log('[spreadChildren]', spreadChildren);

// filter -> returns []
// const certainInput = spreadChildren.filter((child) => child.id === 'certain-input')[0];


// setTimeout(() => {

//     certainInput.value = "Here we are!";
// },3000)
// console.log('[certainInput]', certainInput);

// spread 
// [...children]

// created itterator 
            //  conditions 
                                //   Action 
//     i = 0 => if conditions are true => execute body(scope) of cycle => action(i++)
// for(let i = 0 ; i < children.length ; i++) {
//     const element =  children[i];

    // className 
    // console.log('[element]', element);
    // console.log('[element.className]', element.className);
    // console.log('[element.id]', element.id);
    // console.log('[element.textContent]', element.textContent);
    // console.log('[element.innerHTML]', element.innerHTML);

    // styles
    // console.log('[element.style]', element.style);
    // coordinates
    // console.log('[element.coordinates]', element.getBoundingClientRect());
//     console.log("____________________________________________");

//     if(element.id === 'certain-input') {
//         setTimeout(() => {
//             console.log('[element.value]', element.value);

//             element.style.background = "yellow";
//             console.log("Vilniy narode , vil'noyi krainu vitau");
//         },2000)
//     }

// }

