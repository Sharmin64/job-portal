import React from 'react';

const Blog = () => {
  return (
    <>
      <div className='container justify-center items-center mt-20 bg-[#ffe4e1]'>
      <h3 className='text-5xl text-center'>Blog page</h3>
      <div className='card p-4 text-center mb-6'>
      <h3 className='text-3xl font-serif'>When should you use  context Api? </h3>
      <p className='text-xl font-extralight'>Context is used when some data needs to be accessible by many components at different nesting level. Apply it is because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simple solution than context</p>
     </div>
        <div className='card p-4 m-3 text-center'>
        <h3 className='text-3xl font-serif'>What is a Custom Hook?</h3>
      <p className='text-xl font-extralight'>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JavaScript hook and React JS components: A custom hook does not require a specific signature</p>
     </div>
        <div className='card p-4 m-3 text-center'>
        <h3 className='text-3xl font-serif'>What is useRef?</h3>
      <p className='text-xl font-extralight'>useRef known as initialValue is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current</p>
     </div>
        <div className='card text-center p-4 m-3'>
        <h3 className='text-3xl font-serif'>What is useMemo?</h3>
      <p className='text-xl font-extralight'>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo including calculateValue, dependencies Reference. which is a React Hook that lets you cache the result of a calculation between re-renders.</p>
     </div>
    </div>
    </>
  );
};

export default Blog;