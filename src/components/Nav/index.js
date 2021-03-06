import React from "react";

function Nav() {
  // Nav Links
  const navLinks = [
    { name: "Search For Repository", href: "/search" },
    { name: "View Commit History", href: "/commits" },
  ];

  return (
    <div>
      <header className="navigation-bar">
        <a
          href="https://github.com/dieterichelizabeth/GitLad"
          target="_blank"
          rel="noopener noreferrer"
          className="github-header"
        >
          <i className="bi bi-github mr-2"></i> Gitlad
        </a>

        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={"link-inactive"}>
            {link.name}
          </a>
        ))}
      </header>
    </div>
  );
}

export default Nav;
