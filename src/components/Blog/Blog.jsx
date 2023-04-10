import React from 'react';

const Blog = () => {
  return (
    <>
      <div className='container justify-center items-center mt-20 bg-[#ffe4e1]'>
      <h3 className='text-5xl text-center'>Blog page</h3>
      <div className='card'>
      <h3>When should you use  context Api? </h3>
      <p>Context is used when some data needs to be accessible by many components at different nesting level. Apply it is because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simple solution than context</p>
     </div>
        <div className='card'>
        <h3>What is a Custom Hook?</h3>
      <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JavaScript hook and React JS components: A custom hook does not require a specific signature</p>
     </div>
        <div className='card'>
        <h3>What is useRef?</h3>
      <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current</p>
     </div>
        <div className='card'>
        <h3>What is useMemo?</h3>
      <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
     </div>
    </div>
    </>
  );
};

export default Blog;