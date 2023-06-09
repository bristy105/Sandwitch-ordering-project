## Description

This is the group project for the course *COMP.CS.510-2022-2023 Web Development 2 - Architecting*.

## Getting started

**TODO**: Add instructions for building and running the app locally.

## Dev notes

### Branching model

- *server-a*
  - For implementing the server-a.
  - Stems from *dev* branch.
- *server-b*
  - For implementing the server-b.
  - Stems from *dev* branch.
- *client*
  - For implementing the client app.
  - Stems from *dev* branch.
- *dev*
  - For development.
  - Stems from *main* branch.
  - Unstable, meaning might not always have a working version.
- *main*
  - For deployment.
  - Merges the *dev* branch.
  - Stable, always has a working version.

### Constraints

Constraints for consistency and efficiency:
- Use `merge` instead of `rebase` when merging branches on to *dev* or *main*.
- Don't commit on the *main* branch, it's only for merging.

### File structure

```
    zeus-group/
    |----backend/                         // Backend code of the app
    |----|----rabbitmq/                   // Code dealing with RabbitMQ
    |----|----server-a/                   // Node.js server A
    |----|----server-b/                   // Node.js server B
    |----course-documentation/            // Used by course personnel
    |----frontend/                        // Frontend code of the app
    |----README.md
    |----docker-compose.yml
```
#   S a n d w i t c h - o r d e r i n g - p r o j e c t  
 