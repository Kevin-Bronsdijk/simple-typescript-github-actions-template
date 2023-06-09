# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Project layout
    .
    ├── .github
    │   └── workflows
    |       ├── coverage.yml        # Pull request coverage report
    |       ├── build_main.yml      # Build ncc package 
    |       └── ci.yml              # Pull request ci (Unit Test, integration tests, eslint)
    ├── dist                        # Generated code from main build
    ├── src                         # Source code
    ├── __test__                    # Test and test artifacts
    ├── action.yml                  # Action setup
    └── ...
   
## Pull Request Process

1. Just open a PR. CI will automatically run quality check, unit test and integration tests.
2. make sure to update the README.md with details of changes to the action.

## Code of Conduct

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [https://www.contributor-covenant.org/version/2/0/code_of_conduct/][version]

[homepage]: http://contributor-covenant.org
[version]: https://www.contributor-covenant.org/version/2/0/code_of_conduct/
