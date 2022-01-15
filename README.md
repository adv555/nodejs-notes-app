# nodejs-notes-app

NodeJS application that have few REST endpoints. Users can add, edit and remove notes, archive and
unarchive them. Used [Joi](https://joi.dev/api/?v=17.5.0) validation for routes that receive data (POST/PATCH)

List of endpoints:

| Query type | Endpoint     | Action                          |
| ---------- | ------------ | ------------------------------- |
| POST       | /notes       | Create a note object.           |
| DELETE     | /notes/:id   | Remove item.                    |
| PATCH      | /notes/:id   | Edit item.                      |
| GET        | /notes/:id   | Retrieve item.                  |
| GET        | /notes       | Get all notes.                  |
| GET        | /notes/stats | Get aggregated data statistics. |
