import React from 'react';

const Faq = () => {
    return (
        <div className='p-5'>
            <div>
                <h5>How does react works?</h5>
                <p><b>Answer :</b> ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. t’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
            </div>

            <div>
                <h5>What is the Difference between props and state?</h5>
                <p><b>Answer :</b> porps is is passed data from one component to another. The state is pass Data within the component only. Props is  Immutable (cannot be modified). State is Mutable ( can be modified).</p>
            </div>
            <div>
                <h5>How many works we can do by useEffect without fetching data ?</h5>
                <p><b>Answer :</b> Reading From Local storage, registering and deregistering  event listeners, avoiding code duplicating</p>
            </div>

        </div>
    );
};

export default Faq;