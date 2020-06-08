import React from 'react';
import './style.css';
const Bulletin = ({ dataSource }) => {
    return (React.createElement("div", { className: "bulletin-container" }, dataSource.join(',')));
};
export default Bulletin;
//# sourceMappingURL=index.js.map