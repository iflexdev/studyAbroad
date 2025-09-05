import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "./breadcrumb";

export default function BreadcrumbComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

const breadcrumbLabels = {
  "search-programs": "Search Programs",
  "university-detail": "University Detail",
  "program-detail": "Program Detail",
};

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link to="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Capitalize and replace hyphens with spaces for readability
        const label = breadcrumbLabels[value].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <React.Fragment key={to}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {isLast ? (
                <span className="text-muted-foreground">{label}</span>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={to}>{label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
}
