/**
 * @title: Bulletin
 * @createDate 2020/05/26
 * @description: 用于公告，支持左右、上下
 *
 */
import * as React from 'react';
import './style.css';

export interface Props {
    dataSource: any,
}

const Bulletin = ({ dataSource }: Props) => {
  return (
    <div className="bulletin-container">
      {dataSource.join(',')}
    </div>
  );
};

export default Bulletin;
