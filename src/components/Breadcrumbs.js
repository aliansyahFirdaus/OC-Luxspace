import { Link } from "react-router-dom";

import React from "react";
import propTypes from "prop-types";

export default function Breadcrumbs({ items }) {
  const disabledLink = (i, items) =>
    i === items ? { pointerEvents: "none" } : {};

  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {items.map((item, i) => {
            const arias =
              i === items.length - 1 ? { "aria-label": "current-page" } : {};

            return (
              <li>
                <Link
                  to={item.url}
                  {...arias}
                  style={disabledLink(i, items.length - 1)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Breadcrumbs.propTypes = {
  items: propTypes.array.isRequired,
};
