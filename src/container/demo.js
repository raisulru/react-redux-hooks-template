import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDemoList } from '../store/demoResource/action'


function Demo() {
  const dispatch = useDispatch();
  const list = [1,2,3,4]

  useEffect(() => {
    dispatch(getDemoList());
  }, [dispatch]);

  const { results } = useSelector(
    (state) => state.demo
  );

  const listItems = list.map((item) =>
    <li key={item.toString()}>{item}</li>
  )
  return (
    <div className="demo">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Demo;
