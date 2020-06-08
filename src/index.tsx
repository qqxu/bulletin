/**
 * @title: Bulletin
 * @createDate 2020/05/26
 * @description: 用于公告，支持左右、上下
 *
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css';

export interface Props {
  dataSource: number,
}

const Bulletin = ({ dataSource }: Props) => {
  return (
    <div className="bulletin-container">
      {dataSource}
    </div>
  );
};

export default Bulletin;
