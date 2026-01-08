import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // The 'memoizedCallback' function will only be recreated if 'count' changes.
  const memoizedCallback = useCallback(() => {
    // Function logic here
    console.log('Current count:', count);
  }, [count]); // Dependency array

  // ... rest of the component
}
