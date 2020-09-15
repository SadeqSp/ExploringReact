import React from 'react';

// props = array 
function MyList(props) {
  const arr = props.data;
  const listItem = arr.map(
    (val, index) => <li key={index}>{val}</li>
  );
  return <ul>{listItem}</ul>;
}

export default MyList;