# HTML5 Web Workers
Simple calculator app showing how to use HTML5 Web Worker feature

HTML5 Web Workers allow web developers to run JavaScript scripts in the background, separate from the main browser thread. This feature is especially useful for performing computationally intensive tasks without blocking the user interface.

A simple calculator app developed to demonstrate the usage of HTML5 Web Workers. This calculator app will showcase the basic arithmetic operations such as addition, subtraction, multiplication, and division. By utilizing the Web Worker feature, the app ensure seamless user experience, even when dealing with complex calculations.

First, let's see how Web Workers are implemented in HTML5. Web workers are created using the `Worker()` constructor and must be provided with the path to the JavaScript file that contains the logic for the worker. In our calculator app, we will create a new JavaScript file called `worker.js`.

Inside `worker.js`, we cand define the necessary functions to perform the arithmetic operations. For example, we can have a function called `addition` that takes two numbers as input and returns their sum. Similarly, we can define functions for subtraction, multiplication, and division. Each function will perform the respective arithmetic operation and return the result.

In the main HTML file, let's call it `index.html`, we can create a user interface for the calculator app using HTML and CSS. We will have input fields for the numbers, buttons for the arithmetic operations, and an output field to display the result. Additionally, we will attach event listeners to the buttons, allowing users to execute the desired arithmetic operation.

To utilize the Web Worker feature, we need to employ JavaScript to handle the communication between the main thread and the worker thread. Inside `index.html`, we create a new instance of the Web Worker using the `Worker()` constructor and pass the path to `worker.js` as a parameter. We also need to attach an event listener to receive messages from the worker.

In the event listener, we capture the input values provided by the user and send them to the worker using the `postMessage()` method. The worker thread receives the message, performs the requested arithmetic operation, and sends the result back to the main thread using the `postMessage()` method. In the main thread's event listener, we retrieve the result from the worker and update the output field with the computed value.

By implementing HTML5 Web Workers in this calculator app, we ensure that complex calculations do not block the user interface, providing a smooth and responsive user experience. Users can perform multiple arithmetic operations simultaneously without experiencing any lag or freezing.


# Demo
https://www.yusufsezer.com/projects/html5-web-workers/

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

Created by [Yusuf Sezer](https://www.yusufsezer.com)
