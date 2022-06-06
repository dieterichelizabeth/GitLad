import React from "react";

function SearchResults({ results }) {
  console.log(results);
  return (
    <div>
      {results &&
        results.map((repo) => (
          <div className="repoCards" key={repo.full_name}>
            <div className="repoInfo">
              <a href={`/search/issues/${repo.full_name}`} className="repoName">
                {repo.full_name}
              </a>
              <p className="repoVisibility">{repo.visibility}</p>
              <br></br>
              <p className="repoDescription">{repo.description}</p>
            </div>
            <p
              className={repo.open_issues > 0 ? "repoIssues red" : "repoIssues"}
            >
              {repo.open_issues} Issue(s)
            </p>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
