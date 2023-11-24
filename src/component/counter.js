// import React, { useEffect, useRef } from 'react';

// const CounterComponent = () => {
//     const targetRef = useRef();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // Start the counter when the section is visible
//                         startCounter();
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.5 } // Adjust threshold as needed
//         );

//         // Observe the target element
//         if (targetRef.current) {
//             observer.observe(targetRef.current);
//         }

//         return () => {
//             if (targetRef.current) {
//                 observer.unobserve(targetRef.current);
//             }
//         };
//     }, []);

//     const startCounter = () => {
//         // Your existing counter logic goes here
//         const a = 0;
//         const b = 0;
//         const c = 0;
//         const d = 0;

//         const clientCounter = setInterval(function () {
//             // Update the DOM as needed
//         }, 100);

//         // ... (Other intervals)

//         return () => {
//             clearInterval(clientCounter);
//             // ... (Clear other intervals)
//         };
//     };

//     return (
//         <div ref={targetRef}>
//             {/ Your website section content goes here /}
//         </div>
//     );
// };

// export default CounterComponent;