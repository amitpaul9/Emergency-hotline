1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: The difference between get getElementById, getElementsByClassName, and querySelector / querySelectorAll is bellow:
(i)getElementById select or find the element by Id name.
(ii)getElementByClassName select or find all the elements by their class name.
(iii)querySelector select or find the first element by the CSS selector.
(iv)querySelectorAll select or find all the elements by the CSS selector.


2.How do you create and insert a new element into the DOM?
Answer: The code of create and insert a new element into the DOM is bellow:
Create and insert a new element:
const newElement = document.createElement('div') 
newElement.textContent = 'Hello programming heros'
document.body.appendChild(newElement)


3.What is Event Bubbling and how does it work?
Answer: Event Bubbling means a event starts at the target element and moves up through it's parent element. For elample. The event moves up one by one from the target element. 


4.What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a method where a single event can be added to the parent and control it from child elements. It works using event bubbling. It is useful becase:
(i)Fewer listeners
(ii) better performance


5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: Difference between preventDefault() and stopPropagation() methods is preventDefault() stops browser's default action and on the other hand stopPropagation() is used for stoping event bubbling.