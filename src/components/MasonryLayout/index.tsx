import React from 'react';

// not using cause of children type issue
/* interface IProps {
  columns: number;
  gap: number;
  children: any;
}; */

// REF: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
const MasonryLayout: React.FC<any> = (props) => {
  const { columns = 2, gap = 20, children } = props;

  const columnWrapper: any = {};
  const result: any = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px` }} key={`mansory-item-${i}`}>
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
        key={`mansory-item2-${i}`}
        >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
}

export default MasonryLayout;