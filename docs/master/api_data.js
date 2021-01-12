define({ "api": [
  {
    "type": "GET",
    "url": "/certificate/create/:student/:match",
    "title": "getCertificate",
    "version": "1.1.0",
    "description": "<p>Fetch a certificate</p> <p>This endpoint allows fetching a certificate (as PDF) with the second page customized for a pupil. It is only available for students.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "student",
            "description": "<p>ID of the student</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "match",
            "description": "<p>UUID of the match</p>"
          }
        ],
        "Query Parameter": [
          {
            "group": "Query Parameter",
            "type": "number",
            "optional": false,
            "field": "endDate",
            "description": "<p>Unix Timestamp for the end date</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "subjects",
            "description": "<p>Must be a comma seperated string of the subjects. Only subjects that are matched are available</p>"
          },
          {
            "group": "Query Parameter",
            "type": "number",
            "optional": false,
            "field": "hoursPerWeek",
            "description": "<p>Hours per week helped</p>"
          },
          {
            "group": "Query Parameter",
            "type": "number",
            "optional": false,
            "field": "hoursTotal",
            "description": "<p>Total hours helped</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "medium",
            "description": "<p>Support medium</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "categories",
            "description": "<p>String of category texts for pupil's student description, separated by newlines</p>"
          }
        ],
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "lang",
            "defaultValue": "de",
            "description": "<p>The language</p>"
          }
        ]
      }
    },
    "name": "getCertificate",
    "group": "Certificate",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET https://api.corona-school.de/api/certificate/00000000-0000-0002-0001-1b4c4c526364/00000000-0000-0001-0001-1b4c4c526364",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/certificateController/index.ts",
    "groupTitle": "Certificate",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/certificate/:certificateId?lang=...",
    "title": "getCertificateConfirmation",
    "version": "1.1.0",
    "description": "<p>View a certificate</p> <p>Returns the certificate as PDF</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "certificateId",
            "description": "<p>UUID of the certificate</p>"
          }
        ],
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "lang",
            "defaultValue": "de",
            "description": "<p>The language</p>"
          }
        ]
      }
    },
    "name": "getCertificate",
    "group": "Certificate",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET https://api.corona-school.de/api/certificate/000000001-0000-0000-0701-1b4c4c526384",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/certificateController/index.ts",
    "groupTitle": "Certificate",
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/certificate/:certificateId/confirmation?lang=...",
    "title": "getCertificateConfirmation",
    "version": "1.1.0",
    "description": "<p>View a certificate</p> <p>This endpoint allows looking at a certificate (as HTML) as confirmation link printed on the PDF Certificate.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "certificateId",
            "description": "<p>UUID of the certificate</p>"
          }
        ],
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "lang",
            "defaultValue": "de",
            "description": "<p>The language</p>"
          }
        ]
      }
    },
    "name": "getCertificate",
    "group": "Certificate",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET https://api.corona-school.de/api/certificate/000000001-0000-0000-0701-1b4c4c526384/confirmation",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/certificateController/index.ts",
    "groupTitle": "Certificate",
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/certificates",
    "title": "",
    "version": "1.1.0",
    "description": "<p>View certificate data</p> <p>Returns data for certificates requested by the user or to be approved by the user (either student = user or pupil = user)</p>",
    "name": "getCertificates",
    "group": "Certificate",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET https://api.corona-school.de/api/certificates",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/certificateController/index.ts",
    "groupTitle": "Certificate",
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course",
    "title": "AddCourse",
    "version": "1.1.0",
    "description": "<p>Add a new course.</p> <p>This endpoint allows adding a new course. If successful the ID of the newly created course will be returned.</p>",
    "name": "AddCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Course Object": [
          {
            "group": "Course Object",
            "type": "string[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Array of instructor IDs for this course. The authenticated user's ID must be contained</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "outline",
            "description": "<p>Outline of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>Category of this course (one of <code>&quot;revision&quot;</code>,<code>&quot;club&quot;</code>,<code>&quot;coaching&quot;</code>)</p>"
          },
          {
            "group": "Course Object",
            "type": "string[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tag identifiers for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "submit",
            "description": "<p>If true set status to submitted. Only restricted editing will be possible afterwards</p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "allowContact",
            "description": "<p>If true, course participants are allowed to contact the course instructor via a form.</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": true,
            "field": "correspondentID",
            "description": "<p>An instructor ID who should be the correspondent for this course. The user's ID must be contained in the course's instructors. It is required if allowContact is true.</p>"
          }
        ],
        "Course Return Object": [
          {
            "group": "Course Return Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this course</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/instructor",
    "title": "AddInstructor",
    "version": "1.1.0",
    "description": "<p>Add a new instructor to a course (and all of its subcourses too)</p> <p>It will expect an email address of an existent, active and sucessfully screened instructor (a student who is an instructor)</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "AddInstructor",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl --location --request POST 'localhost:5000/api/course/2/instructor' --header 'Token: authtokenS1' --header 'Content-Type: application/json' --data-raw '{ \"email\": \"mel-98@gmail.com\"}'",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "InstructorInfo Object": [
          {
            "group": "InstructorInfo Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the instructor</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse/:subid/lecture",
    "title": "AddLecture",
    "version": "1.1.0",
    "description": "<p>Add a new lecture under an existing subcourse</p> <p>This endpoint allows adding a new lecture. If successful the ID of the newly created lecture will be returned.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "AddLecture",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/lecture -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Lecture Object": [
          {
            "group": "Lecture Object",
            "type": "string",
            "optional": false,
            "field": "instructor",
            "description": "<p>ID of the instructor for this lecture. Must be contained in the subcourses instructors</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>Unix Timestamp of start date</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of the lecture in minutes</p>"
          }
        ],
        "Lecture Return Object": [
          {
            "group": "Lecture Return Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this lecture</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse",
    "title": "AddSubcourse",
    "version": "1.1.0",
    "description": "<p>Add a new subcourse under an existing course</p> <p>This endpoint allows adding a new subcourse. If successful the ID of the newly created subcourse will be returned.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "AddSubcourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course/<ID>/subcourse -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Subcourse Object": [
          {
            "group": "Subcourse Object",
            "type": "string[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Array of instructor IDs for this subcourse. The authenticated user's ID must not be contained</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "minGrade",
            "description": "<p>Minimum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxGrade",
            "description": "<p>Maximum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxParticipants",
            "description": "<p><em>(optional)</em> Maximum number of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joinAfterStart",
            "description": "<p>If set to true, participants can join after the first lecture has already started</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "published",
            "description": "<p>If published, the subcourse can't be easily cancelled and will appear in the public list</p>"
          }
        ],
        "Subcourse Return Object": [
          {
            "group": "Subcourse Return Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this subcourse</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/course/:id",
    "title": "CancelCourse",
    "version": "1.1.0",
    "description": "<p>Cancel a course.</p> <p>This endpoint allows cancelling a course, which means that all planned subcourses will be cancelled. Furthermore the registered participants will be notified and the course won't appear in the public register anymore. The course and all subresources won't be editable anymore</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "CancelCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/course/:id/subcourse/:subid",
    "title": "CancelSubcourse",
    "version": "1.1.0",
    "description": "<p>Cancel a subcourse.</p> <p>This endpoint allows cancelling a subcourse. All registered participants will be notified and the course won't appear in the public register anymore.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "CancelCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/course/:id/subcourse/:subid/lecture/:lecid",
    "title": "DeleteLecture",
    "version": "1.1.0",
    "description": "<p>Delete a lecture.</p> <p>This endpoint allows deleting a lecture.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "lecid",
            "description": "<p>ID of the lecture</p>"
          }
        ]
      }
    },
    "name": "CancelCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/lecture/<LECID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/image",
    "title": "ChangeImage",
    "version": "1.1.0",
    "description": "<p>Changes the image of a course</p> <p>Expects multipart/form-data image (PNG, JPEG or GIF)</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "ChangeImage",
    "group": "Courses",
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/course/:id",
    "title": "EditCourse",
    "version": "1.1.0",
    "description": "<p>Edit a course.</p> <p>This endpoint allows editing an existing course. Only an instructor is allowed to edit his own courses. There are some constraints on the editability of fields, especially when submitted.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "EditCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course/<ID> -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Course Object": [
          {
            "group": "Course Object",
            "type": "string[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Array of instructor IDs for this course. The authenticated user's ID must be contained</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p><em>(optional)</em> Name of this course, <em>only if not submitted</em></p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "outline",
            "description": "<p><em>(optional)</em> Outline of this course, <em>only if not submitted</em></p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p><em>(optional)</em> Category of this course (one of <code>&quot;revision&quot;</code>,<code>&quot;club&quot;</code>,<code>&quot;coaching&quot;</code>), <em>only if not submitted</em></p>"
          },
          {
            "group": "Course Object",
            "type": "string[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tag identifiers for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "submit",
            "description": "<p><em>(optional)</em> If true set status to submitted. Only restricted editing will be possible afterwards, <em>only if not submitted</em></p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "allowContact",
            "description": "<p>If true, course participants are allowed to contact the course instructor via a form.</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": true,
            "field": "correspondentID",
            "description": "<p>An instructor ID who should be the correspondent for this course. The user's ID must be contained in the course's instructors It is required if allowContact is true.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/course/:id/subcourse/:subid/lecture/:lecid",
    "title": "EditLecture",
    "version": "1.1.0",
    "description": "<p>Edit a lecture.</p> <p>This endpoint allows editing an existing lecture. A lecture can only be editable by owners of the main course.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "lecid",
            "description": "<p>ID of the lecture</p>"
          }
        ]
      }
    },
    "name": "EditLecture",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/lecture/<LECID> -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Lecture Object": [
          {
            "group": "Lecture Object",
            "type": "string",
            "optional": false,
            "field": "instructor",
            "description": "<p>ID of the instructor for this lecture. Must be contained in the subcourses instructors</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>Unix Timestamp of start date</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of the lecture in minutes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/course/:id/subcourse/:subid",
    "title": "EditSubcourse",
    "version": "1.1.0",
    "description": "<p>Edit a subcourse.</p> <p>This endpoint allows editing an existing subcourse. A subcourse can only be editable by owners of the main course.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "EditSubcourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID> -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Subcourse Object": [
          {
            "group": "Subcourse Object",
            "type": "string[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Array of instructor IDs for this subcourse. The authenticated user's ID must not be contained</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "minGrade",
            "description": "<p>Minimum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxGrade",
            "description": "<p>Maximum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxParticipants",
            "description": "<p>Maximum number of participants. May not be lower than the number of already registered participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joinAfterStart",
            "description": "<p>If set to true, participants can join after the first lecture has already started</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "published",
            "description": "<p>If published, the subcourse can't be easily cancelled and will appear in the public list. Once published it can't be unpublished</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/course/:id",
    "title": "GetCourse",
    "version": "1.1.0",
    "description": "<p>Get details about an existing course</p> <p>This endpoint allows getting details about a course. The available fields depend on whether this request is authenticated and whether the user is the instructor of the course</p>",
    "name": "GetCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "Optional Authentication": [
          {
            "group": "Optional Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user <em>(optional)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Course Object": [
          {
            "group": "Course Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "Instructor[]",
            "optional": false,
            "field": "instructors",
            "description": "<p><em>(optional)</em> Information about the instructors of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p><em>(optional)</em> Name of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "outline",
            "description": "<p><em>(optional)</em> Outline of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><em>(optional)</em> Description of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string|null",
            "optional": false,
            "field": "image",
            "description": "<p><em>(optional)</em> URL of an associated image</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p><em>(optional)</em> Category of this course (one of <code>&quot;revision&quot;</code>,<code>&quot;club&quot;</code>,<code>&quot;coaching&quot;</code>)</p>"
          },
          {
            "group": "Course Object",
            "type": "CourseTag[]",
            "optional": false,
            "field": "tags",
            "description": "<p><em>(optional)</em> Tags for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "Subcourse[]",
            "optional": false,
            "field": "subcourses",
            "description": "<p><em>(optional)</em> Array of Subcourses</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p><em>(optional, requires authentication)</em> One of <code>&quot;created&quot;, &quot;submitted&quot;, &quot;allowed&quot;, &quot;denied&quot;, &quot;cancelled&quot;</code></p>"
          },
          {
            "group": "Course Object",
            "type": "number",
            "optional": false,
            "field": "publicRanking",
            "description": "<p>A number indicating a ranking/order of how courses should be displayed in UI.</p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "allowContact",
            "description": "<p>If true, course participants are allowed to contact the course instructor via a form.</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": true,
            "field": "correspondentID",
            "description": "<p>An instructor ID who is the correspondent for this course. The user's ID must be contained in the course's instructors. It is only contained if the instructors are set at the same time (i.e. if accessed by authorized student who is one of the course's instructors).</p>"
          }
        ],
        "Subcourse Object": [
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Instructor[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Information about the instructors of this course</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "minGrade",
            "description": "<p>Minimum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxGrade",
            "description": "<p>Maximum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxParticipants",
            "description": "<p>Maximum number of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "participants",
            "description": "<p>Current number of registered participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Participant[]",
            "optional": false,
            "field": "participantList",
            "description": "<p><em>(requires authentication</em> List of all registered participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Lecture[]",
            "optional": false,
            "field": "lectures",
            "description": "<p>Array of lectures</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joinAfterStart",
            "description": "<p>If set to true, participants can join after the first lecture has already started</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joined",
            "description": "<p><em>(requires authentication)</em> True if the participant has joined this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "onWaitingList",
            "description": "<p><em>(requires authentication)</em> True if the participant has joined the waiting list of this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "published",
            "description": "<p><em>(requires authentication)</em> False if subcourse has not yet been published</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "cancelled",
            "description": "<p>True if subcourse has been cancelled</p>"
          }
        ],
        "Lecture Object": [
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the lecture</p>"
          },
          {
            "group": "Lecture Object",
            "type": "Instructor",
            "optional": false,
            "field": "instructor",
            "description": "<p>Instructor of the lecture</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>Unix Timestamp of start date</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of the lecture in minutes</p>"
          }
        ],
        "Instructor Object": [
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the instructor. Will automatically be included in authorized requests.</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          }
        ],
        "CourseTag Object": [
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier of this tag</p>"
          },
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name used for displaying</p>"
          },
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>Tags with identical category identifiers should be grouped</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/course/:id/subcourse/:subid/meeting/join",
    "title": "JoinCourseMeetingHandler",
    "version": "1.1.0",
    "description": "<p>Get the BBB-Meeting for a given subcourse</p> <p>This endpoint provides the BBB-Meeting of a subcourse.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "GetCourseMeeting",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<ID>/meeting/join",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "BBBMeeting Return Object": [
          {
            "group": "BBBMeeting Return Object",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>Meeting url depending on whether it is an attendee or moderator</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/course/test/meeting/join",
    "title": "TestJoinCourseMeetingHandler",
    "version": "1.1.0",
    "description": "<p>Get a new empty BBB-Meeting for testing purposes.</p> <p>This endpoint will provide a url to join the BBB meeting with a randomly generated name (and if called with an auth token, that user's name will be taken)</p>",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/test/meeting/join",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "name": "GetCourseTestMeetingJoin",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/courses",
    "title": "GetCourses",
    "version": "1.1.0",
    "description": "<p>Request a list of all available courses.</p> <p>This endpoint can be called with authentication as well as without. Authentication unlocks some additional fields and request parameters (see below). The request has to specify if additional fields should be included. Additionally some search parameters can be used to limit the result to matching courses.</p>",
    "name": "GetCourses",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Query Parameter": [
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "fields",
            "description": "<p><em>(optional)</em> Comma seperated list of additionally requested fields (<code>id</code> will be always included). Example: <code>fields=name,outline,tags</code>. If you want optional marked fields of subobjects, you need to specify the subobject and the requested subobject properties. Example: <code>fields=subcourses,subcourses.maxParticipants,subcourses.participants</code></p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "states",
            "description": "<p><em>(optional, Default: <code>allowed</code>) Comma seperated list of possible states of the course. Requires the <code>instructor</code> parameter to be set.</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "instructor",
            "description": "<p><em>(optional)</em> Id of an instructor. Return only courses owned by this instructor. This parameter requires authentication as the specified instructor.</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "participant",
            "description": "<p><em>(optional)</em> Id of a participant. Return only courses this participant has joined. This parameter requires authentication as the specified participant.</p>"
          },
          {
            "group": "Query Parameter",
            "type": "boolean",
            "optional": false,
            "field": "onlyJoinableCourses",
            "description": "<p><em>(optional)</em> Default is true. If true, it will return only those courses that are still joinable (i.e. courses with outstanding lectures and late join allowed if course has started but not yet finished)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET \"https://api.corona-school.de/api/courses?fields=name,outline,category,startDate\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "Optional Authentication": [
          {
            "group": "Optional Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user <em>(optional)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Courses Object": [
          {
            "group": "Courses Object",
            "type": "Course[]",
            "optional": false,
            "field": "root",
            "description": "<p>Array of all courses</p>"
          }
        ],
        "Course Object": [
          {
            "group": "Course Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "Instructor[]",
            "optional": false,
            "field": "instructors",
            "description": "<p><em>(optional)</em> Information about the instructors of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p><em>(optional)</em> Name of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "outline",
            "description": "<p><em>(optional)</em> Outline of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><em>(optional)</em> Description of this course</p>"
          },
          {
            "group": "Course Object",
            "type": "string|null",
            "optional": false,
            "field": "image",
            "description": "<p><em>(optional)</em> URL of an associated image</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p><em>(optional)</em> Category of this course (one of <code>&quot;revision&quot;</code>,<code>&quot;club&quot;</code>,<code>&quot;coaching&quot;</code>)</p>"
          },
          {
            "group": "Course Object",
            "type": "CourseTag[]",
            "optional": false,
            "field": "tags",
            "description": "<p><em>(optional)</em> Tags for this course</p>"
          },
          {
            "group": "Course Object",
            "type": "Subcourse[]",
            "optional": false,
            "field": "subcourses",
            "description": "<p><em>(optional)</em> Array of Subcourses</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p><em>(optional, requires authentication)</em> One of <code>&quot;created&quot;, &quot;submitted&quot;, &quot;allowed&quot;, &quot;denied&quot;, &quot;cancelled&quot;</code></p>"
          },
          {
            "group": "Course Object",
            "type": "number",
            "optional": false,
            "field": "publicRanking",
            "description": "<p>A number indicating a ranking/order of how courses should be displayed in UI.</p>"
          },
          {
            "group": "Course Object",
            "type": "bool",
            "optional": false,
            "field": "allowContact",
            "description": "<p>If true, course participants are allowed to contact the course instructor via a form.</p>"
          },
          {
            "group": "Course Object",
            "type": "string",
            "optional": true,
            "field": "correspondentID",
            "description": "<p>An instructor ID who is the correspondent for this course. The user's ID must be contained in the course's instructors. It is only contained if the instructors are set at the same time (i.e. if accessed by authorized student who is one of the course's instructors).</p>"
          }
        ],
        "Subcourse Object": [
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Instructor[]",
            "optional": false,
            "field": "instructors",
            "description": "<p>Information about the instructors of this course</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "minGrade",
            "description": "<p>Minimum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxGrade",
            "description": "<p>Maximum grade of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "maxParticipants",
            "description": "<p>Maximum number of participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "int",
            "optional": false,
            "field": "participants",
            "description": "<p>Current number of registered participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Participant[]",
            "optional": false,
            "field": "participantList",
            "description": "<p><em>(requires authentication</em> List of all registered participants</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "Lecture[]",
            "optional": false,
            "field": "lectures",
            "description": "<p>Array of lectures</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joinAfterStart",
            "description": "<p>If set to true, participants can join after the first lecture has already started</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "joined",
            "description": "<p><em>(requires authentication)</em> True if the participant has joined this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "onWaitingList",
            "description": "<p><em>(requires authentication)</em> True if the participant has joined the waiting list of this subcourse</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "published",
            "description": "<p><em>(requires authentication)</em> False if subcourse has not yet been published</p>"
          },
          {
            "group": "Subcourse Object",
            "type": "bool",
            "optional": false,
            "field": "cancelled",
            "description": "<p>True if subcourse has been cancelled</p>"
          }
        ],
        "Lecture Object": [
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the lecture</p>"
          },
          {
            "group": "Lecture Object",
            "type": "Instructor",
            "optional": false,
            "field": "instructor",
            "description": "<p>Instructor of the lecture</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>Unix Timestamp of start date</p>"
          },
          {
            "group": "Lecture Object",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration of the lecture in minutes</p>"
          }
        ],
        "Instructor Object": [
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the instructor. Will automatically be included in authorized requests.</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          }
        ],
        "CourseTag Object": [
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier of this tag</p>"
          },
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name used for displaying</p>"
          },
          {
            "group": "CourseTag Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>Tags with identical category identifiers should be grouped</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse/:subid/groupmail",
    "title": "GroupMail",
    "version": "1.1.0",
    "description": "<p>Send a group mail to all participants.</p> <p>The course and subcourse instructors may use this endpoint to send a mail to all participants</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "GroupMail",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/groupmail -d \"<REQUEST\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "GroupMail Object": [
          {
            "group": "GroupMail Object",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject <em>maximum 80 chars</em></p>"
          },
          {
            "group": "GroupMail Object",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>Plaintext body of the mail <em>maximum 2000 chars</em></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse/:subid/instructormail",
    "title": "InstructorMail",
    "version": "1.1.0",
    "description": "<p>Send an email to a course's instructors</p> <p>The subcourse's participants may use this endpoint to send an email to all instructors of that course</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          }
        ]
      }
    },
    "name": "InstructorMail",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/instructormail -d \"<REQUEST\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "InstructorMail Object": [
          {
            "group": "InstructorMail Object",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "InstructorMail Object",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>Plaintext body of the mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse/:subid/participants/:userid",
    "title": "JoinCourse",
    "version": "1.1.0",
    "description": "<p>Join a (sub)course.</p> <p>This endpoint allows joining a subcourse. Only accessable for authorized participants. If all places are already taken or subcourse has already started 409 Conflict is returned</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>ID of the participant</p>"
          }
        ]
      }
    },
    "name": "JoinCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/participants/<USERID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/subcourse/:subid/waitinglist/:userid",
    "title": "JoinCourseWaitingList",
    "version": "1.1.0",
    "description": "<p>Join a (sub)course waiting list.</p> <p>This endpoint allows joining a subcourse's waiting list. Only accessable for authorized participants. If subcourse has already started or pupil already is on the waiting list 409 Conflict is returned. Joining the waiting list is only possible if course is full.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>ID of the participant</p>"
          }
        ]
      }
    },
    "name": "JoinCourseWaitingList",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/waitinglist/<USERID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/course/:id/subcourse/:subid/participants/:userid",
    "title": "LeaveCourse",
    "version": "1.1.0",
    "description": "<p>Leave a course.</p> <p>This endpoint allows leaving an already joined course. Only accessable for authorized participants.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>ID of the participant</p>"
          }
        ]
      }
    },
    "name": "LeaveCourse",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/participants/<USERID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/course/:id/subcourse/:subid/waitinglist/:userid",
    "title": "LeaveCourseWaitingList",
    "version": "1.1.0",
    "description": "<p>Leave a course's waiting list.</p> <p>This endpoint allows leaving the waiting list of a course. Only accessable for authorized participants.</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          },
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "subid",
            "description": "<p>ID of the subcourse</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>ID of the participant</p>"
          }
        ]
      }
    },
    "name": "LeaveCourseWaitingList",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/course/<ID>/subcourse/<SUBID>/waitinglist/<USERID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/course/:id/image",
    "title": "RemoveImage",
    "version": "1.1.0",
    "description": "<p>Remove the image of a course</p>",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the main course</p>"
          }
        ]
      }
    },
    "name": "RemoveImage",
    "group": "Courses",
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/courses/tags",
    "title": "getCourseTags",
    "version": "1.1.0",
    "description": "<p>Retrieves all used course tags</p> <p>Only students or pupils can access this.</p>",
    "name": "getCourseTags",
    "group": "Courses",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" [host]/api/courses/tags",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/courseController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/expert/:id/contact",
    "title": "contactExpert",
    "version": "1.1.0",
    "description": "<p>Writes an email to an expert</p> <p>If email was successfully sent, status code 200 is returned. Note: delivery cannot be guaranteed.</p>",
    "name": "ContactExpert",
    "group": "Expert",
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Expert Id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://[HOST]/api/expert/:id/contact",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/expertController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "ContactExpert Object": [
          {
            "group": "ContactExpert Object",
            "type": "string",
            "optional": false,
            "field": "emailText",
            "description": "<p>The text of the email to be sent</p>"
          },
          {
            "group": "ContactExpert Object",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p><em>(optional)</em> The subject of the email to be sent. An empty string is taken by default.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "404",
            "description": "<p>The requested resource was not found</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/expert",
    "title": "getExperts",
    "version": "1.1.0",
    "description": "<p>Get all active and allowed experts in the database</p> <p>Only students or pupils with a valid token in the header can use the API.</p>",
    "name": "getExperts",
    "group": "Expert",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://[HOST]/api/expert",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/expertController/index.ts",
    "groupTitle": "",
    "success": {
      "fields": {
        "Expert Object": [
          {
            "group": "Expert Object",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the expert.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the expert.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the expert.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><em>(optional)</em> A description provided by the expert.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string[]",
            "optional": false,
            "field": "expertiseTags",
            "description": "<p>Tags describing the expert's fields of expertise.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string[]",
            "optional": false,
            "field": "projectFields",
            "description": "<p>The project fields of the expert.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/expert/tags",
    "title": "getUsedTags",
    "version": "1.1.0",
    "description": "<p>Get all expertise tags in the database</p> <p>Only students or pupils with a valid token in the header can use the API.</p>",
    "name": "getUsedTags",
    "group": "Expert",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://[HOST]/api/expert/tags",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/expertController/index.ts",
    "groupTitle": "",
    "success": {
      "fields": {
        "Expert Object": [
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the tag.</p>"
          },
          {
            "group": "Expert Object",
            "type": "number[]",
            "optional": false,
            "field": "experts",
            "description": "<p>The unique of the experts who chose thies particular tag</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/expert/:id",
    "title": "putExpert",
    "version": "1.1.0",
    "description": "<p>As a student become an expert or change my expert data</p> <p>The user has to be authenticated.</p>",
    "name": "postExpert",
    "group": "Expert",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/expert/<ID>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/expertController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Expert Object": [
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "contactEmail",
            "description": "<p><em>(optional)</em> The email adress on which the expert can be contacted from pupils. If none is given, the original email will be taken.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><em>(optional)</em> A description provided by the expert.</p>"
          },
          {
            "group": "Expert Object",
            "type": "string[]",
            "optional": false,
            "field": "expertiseTags",
            "description": "<p>Tags describing the expert's fields of expertise.</p>"
          },
          {
            "group": "Expert Object",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If true the person consents that her/ his data will be accessible by other users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/user/:id/matches/:uuid",
    "title": "dissolveMatch",
    "version": "1.1.0",
    "description": "<p>Dissolve the specified Match.</p> <p>This endpoint can be used to signal, that a user wants to dissolve his match. The matched partner will be notified of this action. Both students and pupils are only authorized to dissolve matches, where they are a part of.</p>",
    "name": "deleteMatch",
    "group": "Match",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\"-H \"Content-Type: application/json\"  https://api.corona-school.de/api/user/<ID>/matches/<UUID>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Match</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/matchController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "DissolveReason Object": [
          {
            "group": "DissolveReason Object",
            "type": "number",
            "optional": false,
            "field": "reason",
            "description": "<p>Reason for dissolving. Should be an integer between 1 and the maximum allowed reason.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil / Student",
          "content": "{\n    \"reason\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/mentoring/contact",
    "title": "ContactMentor",
    "version": "1.1.0",
    "description": "<p>Writes an email to the mentoring team in the specified category</p> <p>If email was successfully sent out, status code 200 is returned. Note: delivery cannot be guaranteed</p>",
    "name": "ContactMentor",
    "group": "Mentoring",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/mentoring/contact -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/mentoringController/index.ts",
    "groupTitle": "Mentoring",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "ContactMentor Object": [
          {
            "group": "ContactMentor Object",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the mentoring/mentor team to contact. Allowed values are  <code>&quot;language&quot;</code>, <code>&quot;subjects&quot;</code>, <code>&quot;didactic&quot;</code>, <code>&quot;tech&quot;</code>, <code>&quot;selforga&quot;</code>, <code>&quot;other&quot;</code></p>"
          },
          {
            "group": "ContactMentor Object",
            "type": "string",
            "optional": false,
            "field": "emailText",
            "description": "<p>The text of the email that is sent. It must be non-empty.</p>"
          },
          {
            "group": "ContactMentor Object",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p><em>(optional)</em> The subject of the email that is sent. If not given, the default will be the empty string.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/mentoring/feedbackCall",
    "title": "GetFeedbackCallLink",
    "version": "1.1.0",
    "description": "<p>Query for the next feedback call date and its meeting link</p>",
    "name": "GetFeedbackCallLink",
    "group": "Mentoring",
    "examples": [
      {
        "title": "Curl",
        "content": "curl GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/mentoring/feedbackCall\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/mentoringController/index.ts",
    "groupTitle": "Mentoring",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/mentoring/material",
    "title": "GetMaterial",
    "version": "1.1.0",
    "description": "<p>Query for access data for supportive material for students</p>",
    "name": "GetMaterial",
    "group": "Mentoring",
    "parameter": {
      "fields": {
        "QueryParameter": [
          {
            "group": "QueryParameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the queried ressource. Can be either 'files' or 'playlist'</p>"
          },
          {
            "group": "QueryParameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>The location key for the queried ressource. Possible keys are specified in /common/mentoring/material.ts</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/mentoring/material?type=files&location=pdf_entry\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/mentoringController/index.ts",
    "groupTitle": "Mentoring",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/user/:id/projectMatches/:uuid",
    "title": "dissolveProjectMatch",
    "version": "1.1.0",
    "description": "<p>Dissolve the specified ProjectMatch.</p> <p>This endpoint can be used to signal, that a user wants to dissolve his project match. The matched partner will be notified of this action. Both students and pupils are only authorized to dissolve project matches, where they are a part of.</p>",
    "name": "deleteProjectMatch",
    "group": "ProjectMatch",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X DELETE -H \"Token: <AUTHTOKEN>\"-H \"Content-Type: application/json\"  https://api.corona-school.de/api/user/<ID>/projectMatches/<UUID>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the Project Match</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/projectMatchController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "ProjectMatchDissolveReason Object": [
          {
            "group": "ProjectMatchDissolveReason Object",
            "type": "number",
            "optional": false,
            "field": "reason",
            "description": "<p>Reason for dissolving. Should be an integer between 1 and the maximum allowed reason.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil / Student",
          "content": "{\n    \"reason\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/courses",
    "title": "GetSchools",
    "version": "1.1.0",
    "description": "<p>Request a list of all available schools we're publicly cooperting with as part of the cooperations with several states in Germany.</p> <p>This endpoint can be called without authentication.</p>",
    "name": "GetSchools",
    "group": "Registration",
    "parameter": {
      "fields": {
        "Query Parameter": [
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>The state of Germany for which the cooperation schools should be returned.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET \"https://api.corona-school.de/api/register/:state/schools\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/registrationController/index.ts",
    "groupTitle": "Registration",
    "header": {
      "fields": {
        "Optional Authentication": [
          {
            "group": "Optional Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user <em>(optional)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "SchoolInfo Object": [
          {
            "group": "SchoolInfo Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>School's name</p>"
          },
          {
            "group": "SchoolInfo Object",
            "type": "string",
            "optional": false,
            "field": "emailDomain",
            "description": "<p>School's email address domain</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "401",
            "description": "<p>The user is authenticated, but may not access this resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 401 Forbidden\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/register/mentor",
    "title": "RegisterMentor",
    "version": "1.1.0",
    "description": "<p>Register a user as a mentor.</p>",
    "name": "RegisterMentor",
    "group": "Registration",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Content-Type: application/json\" https://api.corona-school.de/api/register/mentor -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/registrationController/index.ts",
    "groupTitle": "Registration",
    "header": {
      "fields": {
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Mentor Object": [
          {
            "group": "Mentor Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string[]",
            "optional": false,
            "field": "division",
            "description": "<p>Division, array of <code>&quot;facebook&quot;, &quot;email&quot;, &quot;events&quot;, &quot;video&quot;, &quot;supervision&quot;</code></p>"
          },
          {
            "group": "Mentor Object",
            "type": "string[]",
            "optional": false,
            "field": "expertise",
            "description": "<p>Expertise, array of <code>&quot;language_difficulties&quot;, &quot;specialized_subject_experience&quot;, &quot;didactic_expert&quot;, &quot;technical_support&quot;, &quot;self_organization&quot;</code></p>"
          },
          {
            "group": "Mentor Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>Subjects, <em>required if</em> <code>division = &quot;supervision&quot;</code> or <code>expertise = &quot;specialized_subject_experience&quot;</code></p>"
          },
          {
            "group": "Mentor Object",
            "type": "bool",
            "optional": false,
            "field": "teachingExperience",
            "description": "<p>User reports existing teaching experience</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Additional message</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Additional description</p>"
          },
          {
            "group": "Mentor Object",
            "type": "string|undefined",
            "optional": false,
            "field": "redirectTo",
            "description": "<p>the page the user sees after registration</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/register/tutee",
    "title": "RegisterTutee",
    "version": "1.1.0",
    "description": "<p>Register a user as a tutee.</p>",
    "name": "RegisterTutee",
    "group": "Registration",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Content-Type: application/json\" https://api.corona-school.de/api/register/tutee -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/registrationController/index.ts",
    "groupTitle": "Registration",
    "header": {
      "fields": {
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Tutee Object": [
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          },
          {
            "group": "Tutee Object",
            "type": "int",
            "optional": true,
            "field": "grade",
            "description": "<p>Grade of the pupil (required if not only registering for project coaching)</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>State, one of <code>&quot;bw&quot;, &quot;by&quot;, &quot;be&quot;, &quot;bb&quot;, &quot;hb&quot;, &quot;hh&quot;, &quot;he&quot;, &quot;mv&quot;, &quot;ni&quot;, &quot;nw&quot;, &quot;rp&quot;, &quot;sl&quot;, &quot;sn&quot;, &quot;st&quot;, &quot;sh&quot;, &quot;th&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "school",
            "description": "<p>School type, one of <code>&quot;grundschule&quot;, &quot;gesamtschule&quot;, &quot;hauptschule&quot;, &quot;realschule&quot;, &quot;gymnasium&quot;, &quot;förderschule&quot;, &quot;berufsschule&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "Tutee Object",
            "type": "bool",
            "optional": false,
            "field": "isTutee",
            "description": "<p>True, if eligible for one-on-one matching</p>"
          },
          {
            "group": "Tutee Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p><em>required if</em> <code>isTutor = true</code>: Subjects</p>"
          },
          {
            "group": "Tutee Object",
            "type": "bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>Opt-in for newsletter</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>Additional information</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string|undefined",
            "optional": false,
            "field": "redirectTo",
            "description": "<p>the page the user sees after registration</p>"
          },
          {
            "group": "Tutee Object",
            "type": "bool",
            "optional": false,
            "field": "isProjectCoachee",
            "description": "<p>True, if participating in project coaching</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string[]",
            "optional": true,
            "field": "isJufoParticipant",
            "description": "<p>(for project coaching required) One of <code> &quot;yes&quot;, &quot;no&quot;, &quot;unsure&quot;, &quot;neverheard&quot; </code></p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": true,
            "field": "projectFields",
            "description": "<p>(for project coaching required) An array of strings with identifiers to the project fields if isProjectCoachee is true. One of <code>&quot;Arbeitswelt&quot;, &quot;Biologie&quot;, &quot;Chemie&quot;, &quot;Geo-und-Raumwissenschaften&quot;, &quot;Mathematik/Informatik&quot;, &quot;Physik&quot;, &quot;Technik&quot;</code></p>"
          },
          {
            "group": "Tutee Object",
            "type": "number",
            "optional": true,
            "field": "projectMemberCount",
            "description": "<p>(for project coaching required) A number of persons that are making the project together. Values between 1 and 3 are allowed.</p>"
          },
          {
            "group": "Tutee Object",
            "type": "string",
            "optional": true,
            "field": "registrationSource",
            "description": "<p>(optional field) Can be used to indicate some registration source, allowed values are &quot;NORMAL&quot;, &quot;COOPERATION&quot;, &quot;DREHTUER&quot;, &quot;OTHER&quot;.</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/register/tutor",
    "title": "RegisterTutor",
    "version": "1.1.0",
    "description": "<p>Register a user as a tutor.</p>",
    "name": "RegisterTutor",
    "group": "Registration",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Content-Type: application/json\" https://api.corona-school.de/api/register/tutor -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/registrationController/index.ts",
    "groupTitle": "Registration",
    "header": {
      "fields": {
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Tutor Object": [
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": false,
            "field": "isTutor",
            "description": "<p>True, if eligible for one-on-one matching</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": false,
            "field": "isInstructor",
            "description": "<p>True, if eligible for course management</p>"
          },
          {
            "group": "Tutor Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p><em>required if</em> <code>isTutor = true</code>: Subjects</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": false,
            "field": "isOfficial",
            "description": "<p>True, if user is looking for something official</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: State, one of <code>&quot;bw&quot;, &quot;by&quot;, &quot;be&quot;, &quot;bb&quot;, &quot;hb&quot;, &quot;hh&quot;, &quot;he&quot;, &quot;mv&quot;, &quot;ni&quot;, &quot;nw&quot;, &quot;rp&quot;, &quot;sl&quot;, &quot;sn&quot;, &quot;st&quot;, &quot;sh&quot;, &quot;th&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "university",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: University</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "module",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: Module, one of <code>&quot;internship&quot;, &quot;seminar&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "Tutor Object",
            "type": "int",
            "optional": false,
            "field": "hours",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: Hours needed &gt; 0</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>Opt-in for newsletter</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>Additional information</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string|undefined",
            "optional": false,
            "field": "redirectTo",
            "description": "<p>the page the user sees after registration</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": false,
            "field": "isProjectCoach",
            "description": "<p>True, if eligible for project coaching</p>"
          },
          {
            "group": "Tutor Object",
            "type": "bool",
            "optional": true,
            "field": "isUniversityStudent",
            "description": "<p>(for project coaching required) True, if tutor is a university student</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": true,
            "field": "wasJufoParticipant",
            "description": "<p>(for project coaching required) One of <code> &quot;yes&quot;, &quot;no&quot;, &quot;idk&quot; </code></p>"
          },
          {
            "group": "Tutor Object",
            "type": "boolean",
            "optional": true,
            "field": "hasJufoCertificate",
            "description": "<p>(for project coaching required) One of <code> &quot;yes&quot;, &quot;no&quot;, &quot;idk&quot; </code></p>"
          },
          {
            "group": "Tutor Object",
            "type": "string[]",
            "optional": true,
            "field": "projectFields",
            "description": "<p>(for project coaching required) An array of strings with identifiers to the project fields if isProjectCoach is true. One of <code>&quot;Arbeitswelt&quot;, &quot;Biologie&quot;, &quot;Chemie&quot;, &quot;Geo-und-Raumwissenschaften&quot;, &quot;Mathematik/Informatik&quot;, &quot;Physik&quot;, &quot;Technik&quot;</code></p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": true,
            "field": "jufoPastParticipationInfo",
            "description": "<p>(for project coaching sometimes required) An open text field that can be used to give any information on a past jufo participation in a very informal way.</p>"
          },
          {
            "group": "Tutor Object",
            "type": "string",
            "optional": true,
            "field": "registrationSource",
            "description": "<p>(optional field) Can be used to indicate some registration source, allowed values are &quot;NORMAL&quot;, &quot;COOPERATION&quot;, &quot;DREHTUER&quot;, &quot;OTHER&quot;.</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/register/tutee/state",
    "title": "StateRegisterTutee",
    "version": "1.1.0",
    "description": "<p>Register a user as a tutee for a specific state cooperation</p>",
    "name": "StateRegisterTutee",
    "group": "Registration",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Content-Type: application/json\" https://api.corona-school.de/api/register/tutee/state -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/registrationController/index.ts",
    "groupTitle": "Registration",
    "header": {
      "fields": {
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "StateTutee Object": [
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "int",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the pupil</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State, one of <code>&quot;bw&quot;, &quot;by&quot;, &quot;be&quot;, &quot;bb&quot;, &quot;hb&quot;, &quot;hh&quot;, &quot;he&quot;, &quot;mv&quot;, &quot;ni&quot;, &quot;nw&quot;, &quot;rp&quot;, &quot;sl&quot;, &quot;sn&quot;, &quot;st&quot;, &quot;sh&quot;, &quot;th&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "StateTutee Object",
            "type": "bool",
            "optional": false,
            "field": "isTutee",
            "description": "<p>True, if eligible for one-on-one matching</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p><em>required if</em> <code>isTutor = true</code>: Subjects</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "bool",
            "optional": false,
            "field": "newsletter",
            "description": "<p>Opt-in for newsletter</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>Additional information</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string",
            "optional": false,
            "field": "teacherEmail",
            "description": "<p>The email address of the teacher as part of cooperation with one of Germany's states</p>"
          },
          {
            "group": "StateTutee Object",
            "type": "string|undefined",
            "optional": false,
            "field": "redirectTo",
            "description": "<p>the page the user sees after registration</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "409",
            "description": "<p>Resource conflicts with existing resource</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/screener",
    "title": "addScreener",
    "version": "1.0.1",
    "description": "<p>Adds a screener</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "addScreener",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/screener/\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/screening/courses/tags/create",
    "title": "createCourseTag",
    "version": "1.0.1",
    "description": "<p>Adds a course tag</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "createCourseTag",
    "group": "Screener",
    "parameter": {
      "fields": {
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the new course tag</p>"
          },
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the new tag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/courses/tags/create\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/screening/courses/tags",
    "title": "getCourseTags",
    "version": "1.0.1",
    "description": "<p>Retrieves all used course tags</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getCourseTags",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" [host]/api/screening/courses/tags",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/screening/courses",
    "title": "getCourses",
    "version": "1.0.1",
    "description": "<p>Retrieves the first 20 courses that match the specified filters.</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getCourses",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" [host]/api/screening/courses",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string|undefined",
            "optional": false,
            "field": "courseState",
            "description": "<p>the course state (&quot;created&quot;, &quot;submitted&quot;, &quot;allowed&quot;, &quot;denied&quot;, &quot;cancelled&quot;)</p>"
          },
          {
            "group": "URL Query",
            "type": "string|undefined",
            "optional": false,
            "field": "search",
            "description": "<p>A query text to be searched in the title and description</p>"
          },
          {
            "group": "URL Query",
            "type": "string|undefined",
            "optional": false,
            "field": "page",
            "description": "<p>The page</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/screening/instructors",
    "title": "getInstructors",
    "version": "1.0.1",
    "description": "<p>Retrieves the first 20 courses that match the specified filters.</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getInstructors",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" [host]/api/screening/instructors",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query": [
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "screeningStatus",
            "description": "<p>get instructors with a certain screeningStatus</p>"
          },
          {
            "group": "URL Query",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>fuzzy search inside the instructors name and email, supporting Postgres ILIKE syntax</p>"
          },
          {
            "group": "URL Query",
            "type": "string|undefined",
            "optional": false,
            "field": "page",
            "description": "<p>The page</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/screener/:email/:includepassword",
    "title": "getScreenerByMail",
    "version": "1.0.1",
    "description": "<p>Get a screener by her/his email address, include or exclude password hash transmission with includepassword flag</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getScreenerByMail",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/screener/<EMAIL>/<true|false>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Screener's Email Address</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "includepassword",
            "description": "<p>Flag to include or exclude password hash from transmitted object</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/screening/course/:courseID/update",
    "title": "updateCourse",
    "version": "1.0.1",
    "description": "<p>Updates a course</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "updateCourse",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" [host]/api/screening/course/id/update",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "JSON Body": [
          {
            "group": "JSON Body",
            "type": "string|undefined",
            "optional": false,
            "field": "courseState",
            "description": "<p>the course state (&quot;allowed&quot;, &quot;denied&quot;, &quot;cancelled&quot;) to update</p>"
          },
          {
            "group": "JSON Body",
            "type": "string|undefined",
            "optional": false,
            "field": "name",
            "description": "<p>the new name</p>"
          },
          {
            "group": "JSON Body",
            "type": "string|undefined",
            "optional": false,
            "field": "description",
            "description": "<p>the new description</p>"
          },
          {
            "group": "JSON Body",
            "type": "string|undefined",
            "optional": false,
            "field": "outline",
            "description": "<p>the new outline</p>"
          },
          {
            "group": "JSON Body",
            "type": "string|undefined",
            "optional": false,
            "field": "category",
            "description": "<p>the new category (&quot;revision&quot;, &quot;club&quot;, &quot;coaching&quot;)</p>"
          },
          {
            "group": "JSON Body",
            "type": "Object[]|undefined",
            "optional": false,
            "field": "tags",
            "description": "<p>the new course tags, items must have either identifier (string) or name (string) as property</p>"
          },
          {
            "group": "JSON Body",
            "type": "string|null|undefined",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>the new image url, or null if no image should be set</p>"
          },
          {
            "group": "JSON Body",
            "type": "Object[]|undefined",
            "optional": false,
            "field": "instructors",
            "description": "<p>the instructor ids of this course</p>"
          },
          {
            "group": "JSON Body",
            "type": "number|undefined",
            "optional": false,
            "field": "instructors.id",
            "description": "<p>the instructor ids of this course</p>"
          },
          {
            "group": "JSON Body",
            "type": "Object[]|undefined",
            "optional": false,
            "field": "newLectures",
            "description": "<p>the new lectures of this course after the update</p>"
          },
          {
            "group": "JSON Body",
            "type": "Object[]|undefined",
            "optional": false,
            "field": "removeLectures",
            "description": "<p>the lectures that should be removed from the course</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/screener/:email",
    "title": "updateScreenerByMail",
    "version": "1.0.1",
    "description": "<p>Update a screener by her/his email address</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "updateScreenerByMail",
    "group": "Screener",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/screener/<EMAIL>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Screener's Email Address</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Screener",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/student/:email",
    "title": "getStudentByMail",
    "version": "1.0.1",
    "description": "<p>Get a student by her/his email address</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getStudentByMail",
    "group": "Student",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/student/<EMAIL>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Student Email Address</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Example",
          "content": "{\n   \"firstName\": \"Leon\",\n   \"lastName\": \"Jackson\",\n   \"email\": \"leon-jackson@t-online.de\",\n   \"feedback\": null,\n   \"phone\": null,\n   \"newsletter\": false,\n   \"msg\": null,\n   \"university\": null,\n   \"state\": \"other\",\n   \"isUniversityStudent\": true,\n   \"isTutor\": true,\n   \"isInstructor\": true,\n   \"isProjectCoach\": false,\n   \"subjects\": [\n       {\n           \"name\": \"Englisch\",\n           \"grade\": {\n               \"min\": 1,\n               \"max\": 8\n           }\n       },\n       {\n           \"name\": \"Spanisch\",\n           \"grade\": {\n               \"min\": 6,\n               \"max\": 10\n           }\n       }\n   ],\n   \"projectFields\": [],\n   \"screenings\": {\n       \"tutor\": {\n           \"verified\": true,\n           \"comment\": \"🎉\",\n           \"knowsCoronaSchoolFrom\": \"Internet\"\n       },\n       \"instructor\": {\n           \"verified\": true,\n           \"comment\": \"🎉\",\n           \"knowsCoronaSchoolFrom\": \"Internet\"\n       },\n       \"projectCoach\": {\n           \"verified\": true,\n           \"comment\": \"🎉\",\n           \"knowsCoronaSchoolFrom\": \"Instagram\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Student",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/student",
    "title": "getStudents",
    "version": "1.0.1",
    "description": "<p>Get a all students in the databse</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "getStudents",
    "group": "Student",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/student/",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Student",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/student/:email",
    "title": "updateStudentByMailHandler",
    "version": "1.0.1",
    "description": "<p>Update a student by her/his email address.</p> <p>Can be used to update most of the important settings (including the screenings) of a user.</p> <p>Only screeners with a valid token in the request header can use the API.</p>",
    "name": "updateStudentByMailHandler",
    "group": "Student",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/student/<EMAIL> -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Student Email Address</p>"
          }
        ],
        "Body Parameter": [
          {
            "group": "Body Parameter",
            "type": "string",
            "optional": false,
            "field": "screenerEmail",
            "description": "<p>Screener's Email Address the change should be associated with</p>"
          }
        ],
        "": [
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": false,
            "field": "isTutor",
            "description": "<p>whether is 1-on-1 learning tutor</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": false,
            "field": "isInstructor",
            "description": "<p>whether wants to give courses or not</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": false,
            "field": "isProjectCourse",
            "description": "<p>whether wants to give project coaching</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "Object",
            "optional": false,
            "field": "screenings",
            "description": "<p>Information on the available screenings. Only those are not null/undefined which exist/should exist</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "Object[]",
            "optional": false,
            "field": "projectFields",
            "description": "<p>All project fields for 1-on-1 project coaching</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "Object[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>All subjects for 1-on-1 tutoring</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "string",
            "optional": true,
            "field": "feedback",
            "description": "<p>The student's feedback</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "string",
            "optional": true,
            "field": "phone",
            "description": "<p>The student's phone number</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": false,
            "field": "newsletter",
            "description": "<p>Student wanna subscribe newsletter or not</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "string",
            "optional": true,
            "field": "msg",
            "description": "<p>The student's message.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "string",
            "optional": true,
            "field": "university",
            "description": "<p>The student's university.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>The student's state.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": true,
            "field": "isUniversityStudent",
            "description": "<p>The student is official registered student (for jufo) or not.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": true,
            "field": "jufoPastParticipationConfirmed",
            "description": "<p>Can be one of null/true/false and indicates if Corona School has gotten information on whether a student was really a past jufo participant.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": true,
            "field": "wasJufoParticipant",
            "description": "<p>One of &quot;yes&quot;/&quot;no&quot;/&quot;idk&quot;. Indicates whether this person was a past jufo participant.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": true,
            "field": "hasJufoCertificate",
            "description": "<p>Indicates if the person has a jufo certificate that can be shown in the screening interview.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "boolean",
            "optional": true,
            "field": "jufoPastParticipationInfo",
            "description": "<p>A string with info on the person's past jufo participation.</p>"
          },
          {
            "group": "StudentEditableInfo",
            "type": "Object",
            "optional": true,
            "field": "official",
            "description": "<p>Information on the student if official (internship/DLL);</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body",
          "content": "\n{\n   \"screenerEmail\": \"maxi-screening@example.org\",\n   \"feedback\": null,\n   \"phone\": null,\n   \"newsletter\": false,\n   \"msg\": null,\n   \"university\": null,\n   \"state\": \"nw\",\n   \"isUniversityStudent\": true,\n   \"isTutor\": true,\n   \"isInstructor\": true,\n   \"isProjectCoach\": false,\n   \"subjects\": [\n       {\n           \"name\": \"Englisch\",\n           \"grade\": {\n               \"min\": 1,\n               \"max\": 8\n           }\n       },\n       {\n           \"name\": \"Spanisch\",\n           \"grade\": {\n               \"min\": 6,\n               \"max\": 10\n           }\n       }\n   ],\n   \"projectFields\": [\n       {\n           \"name\": \"Arbeitswelt\",\n           \"min\": 1,\n           \"max\": 9\n       }\n   ],\n   \"screenings\": {\n       \"tutor\": {\n           \"verified\": true,\n           \"comment\": \"🎉\",\n           \"knowsCoronaSchoolFrom\": \"Internet\"\n       },\n       \"instructor\": {\n           \"verified\": true,\n           \"comment\": \"🎉\",\n           \"knowsCoronaSchoolFrom\": \"Internet\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "web/controllers/screeningController/index.ts",
    "groupTitle": "Student",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/token",
    "title": "requestNewToken",
    "version": "1.0.1",
    "description": "<p>Request a new token for the user account specified by email.</p> <p>This endpoint allows requesting a new token send via email to the user. A user can only request a new token, if he doesn't have an unused token from the last 24h.</p>",
    "name": "requestNewToken",
    "group": "Token",
    "parameter": {
      "fields": {
        "Query Parameter": [
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the user (case insensitive)</p>"
          },
          {
            "group": "Query Parameter",
            "type": "string",
            "optional": false,
            "field": "redirectTo",
            "description": "<p>route to the page the Token-Link shall lead to (optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET \"https://api.corona-school.de/api/token?email=info%40example.org&path=/courses/2\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/tokenController/index.ts",
    "groupTitle": "Token",
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "404",
            "description": "<p>The requested resource was not found</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/token",
    "title": "verifyToken",
    "version": "1.0.1",
    "description": "<p>Try to verify a token.</p> <p>This endpoint allows verifying a newly created user account and generating its first authToken.</p>",
    "name": "verifyToken",
    "group": "Token",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Content-Type: application/json\" https://api.corona-school.de/api/token/ -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/tokenController/index.ts",
    "groupTitle": "Token",
    "header": {
      "fields": {
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Verify Token": [
          {
            "group": "Verify Token",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Verification token</p>"
          }
        ],
        "Auth Token": [
          {
            "group": "Auth Token",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"token\": \"OogeiQuah8uu6ohz1oc8iihaifaixahR\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body",
          "content": "{\n    \"token\": \"some-semi-persistent-auth-token\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "getCurrentUser",
    "version": "1.1.0",
    "description": "<p>Get data about the currently authenticated user.</p> <p>This endpoint returns all available information about the current user. It can be used, when the id of the current user is not known. It is equivalent to execute <code>GET /user/:id</code> using the id of the current user.</p>",
    "name": "getCurrentUser",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "User Object": [
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this user</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address (unique)</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Either <code>&quot;pupil&quot;</code> or <code>&quot;student&quot;</code></p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "isTutor",
            "description": "<p><i>Only available for students:</i> User registered as Tutor for 1:1 matches</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "isInstructor",
            "description": "<p><i>Only available for students:</i> User registered as Instructor for courses</p>"
          },
          {
            "group": "User Object",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>An inactive user is not considered for new matches.</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "grade",
            "description": "<p><i>Only available for pupils:</i> Grade of the pupil</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "matchesRequested",
            "description": "<p><i>Only available for students:</i> Number of matches requested by the user</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "projectMatchesRequested",
            "description": "<p>Number of project matches requested by the user</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "screeningStatus",
            "description": "<p><i>Only available for students:</i> <code>&quot;ACCEPTED&quot;</code> if the user was screened with success, <code>&quot;REJECTED&quot;</code> if the user was rejected, <code>&quot;UNSCREENED&quot;</code> if the user wasn't screened yet</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "instructorScreeningStatus",
            "description": "<p><i>Only available for students:</i> <code>&quot;ACCEPTED&quot;</code> if the user was screened for group courses with success, <code>&quot;REJECTED&quot;</code> if the user was rejected, <code>&quot;UNSCREENED&quot;</code> if the user wasn't screened yet</p>"
          },
          {
            "group": "User Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>List of subjects</p>"
          },
          {
            "group": "User Object",
            "type": "Match[]",
            "optional": false,
            "field": "matches",
            "description": "<p>List of current matches</p>"
          },
          {
            "group": "User Object",
            "type": "ProjectMatch[]",
            "optional": false,
            "field": "projectMatches",
            "description": "<p>List of current project matches</p>"
          },
          {
            "group": "User Object",
            "type": "Match[]",
            "optional": false,
            "field": "dissolvedMatches",
            "description": "<p>List of dissolved (past) matches</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "lastUpdatedSettingsViaBlocker",
            "description": "<p>The unix timestamp of when some settings were last updated by a blocking popup (aka &quot;blocker&quot;) in the frontend</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "registrationDate",
            "description": "<p>The unix timestamp of when the user registered</p>"
          },
          {
            "group": "User Object",
            "type": "ExpertData",
            "optional": false,
            "field": "expertData",
            "description": "<p><i>Only available for students (optional):</i> Expert specific data</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ],
        "Match Object": [
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>Unique identifier for the Match</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "grade",
            "description": "<p><i>only available for students:</i> Grade of the pupil</p>"
          },
          {
            "group": "Match Object",
            "type": "string[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>Subjects of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "jitsilink",
            "description": "<p>Link to the Jitsi session</p>"
          },
          {
            "group": "Match Object",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": "<p>Unix timestamp of when these persons were matched</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"some-kind-of-userid\",\n    \"firstname\": \"John\",\n    \"lastname\": \"Doe\",\n    \"email\": \"john.doe@example.com\",\n    \"type\": \"pupil\",\n    \"isTutor\": false,\n    \"isInstructor\": false,\n    \"isPupil\": true,\n    \"isParticipant\": false,\n    \"isProjectCoachee\": false,\n    \"active\": true,\n    \"grade\": 7,\n    \"subjects\": [\n        {\n            \"name\": \"Chinesisch\",\n            \"minGrade\": 1,\n            \"maxGrade\": 13\n        }\n    ],\n    \"matches\": [\n        {\n            \"firstname\": \"Jane\",\n            \"lastname\": \"Doe\",\n            \"email\": \"jane.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"date\": 1590834509\n        }\n    ],\n    \"dissolvedMatches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Appleseed\",\n            \"email\": \"john.appleseed@example.com\",\n            \"uuid\": \"1a215b2f-ef17-44f8-a38d-6bcec820a8cf\",\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-1a215b2f-ef17-44f8-a38d-6bcec820a8cf\",\n            \"date\": 1590834509\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Student",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"userid-of-some-kind\",\n    \"firstname\": \"Jane\",\n    \"lastname\": \"Doe\",\n    \"email\": \"jane.doe@example.com\",\n    \"type\": \"student\",\n    \"isTutor\": true,\n    \"isInstructor\": false,\n    \"isPupil\": false,\n    \"isParticipant\": false,\n    \"isProjectCoach\": false,\n    \"active\": true,\n    \"screeningStatus\": \"ACCEPTED\",\n    \"instructorScreeningStatus\": \"ACCEPTED\",\n    \"projectCoachingScreeningStatus\": \"ACCEPTED\",\n    \"matchesRequested\": 1,\n    \"projectMatchesRequested\": 1,\n    \"subjects\": [\n        {\n            \"name\": \"Chinesisch\",\n            \"minGrade\": 5,\n            \"maxGrade\": 8\n        }\n    ],\n    \"matches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Doe\",\n            \"email\": \"john.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"grade\": 6,\n            \"subjects\": [\n                \"Englisch\",\n                \"Chinesisch\"\n            ]\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"date\": 1590834509\n        }\n    ],\n    \"dissolvedMatches\": [\n        {\n            \"firstname\": \"Jane\",\n            \"lastname\": \"Appleseed\",\n            \"email\": \"jane.appleseed@example.com\",\n            \"uuid\": \"24a93ed5-4bfe-4969-adae-b6cceaf0d1a0\",\n            \"grade\": 9,\n            \"subjects\": [\n                \"Mathematik\",\n                \"Englisch\"\n            ],\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-24a93ed5-4bfe-4969-adae-b6cceaf0d1a0\",\n            \"date\": 1590834509\n        }\n    ],\n    \"projectMatches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Doe\",\n            \"email\": \"john.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"grade\": 6,\n            \"projectFields\": [\n                \"Arbeitswelt\",\n                \"Chemie\"\n            ]\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-ProjectCoaching-adl792d76-8d7f-9083-0973-a8d9b8e0d2j\",\n            \"date\": 1590834509,\n            \"projectMemberCount\": 2,\n            \"jufoParticipation\": \"yes\",\n            \"dissolved\": false\n        }\n    ],\n    \"expertData\": {\n        \"id\": 2,\n        \"contactEmail\": \"contact@jufo-tufo.de\",\n        \"description\": null,\n        \"expertiseTags\": [\n            \"LTE\",\n            \"Glasfaser\"\n        ],\n        \"active\": true,\n        \"allowed\": true\n    },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/user/:id",
    "title": "getUser",
    "version": "1.1.0",
    "description": "<p>Get data about an user.</p> <p>This endpoint returns all available information about the specified user. The user has to be authenticated using his id and can only view his own information.</p>",
    "name": "getUser",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X GET -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>",
        "type": "curl"
      }
    ],
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "User Object": [
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for this user</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address (unique)</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Either <code>&quot;pupil&quot;</code> or <code>&quot;student&quot;</code></p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "isTutor",
            "description": "<p><i>Only available for students:</i> User registered as Tutor for 1:1 matches</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "isInstructor",
            "description": "<p><i>Only available for students:</i> User registered as Instructor for courses</p>"
          },
          {
            "group": "User Object",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>An inactive user is not considered for new matches.</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "grade",
            "description": "<p><i>Only available for pupils:</i> Grade of the pupil</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "matchesRequested",
            "description": "<p><i>Only available for students:</i> Number of matches requested by the user</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "projectMatchesRequested",
            "description": "<p>Number of project matches requested by the user</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "screeningStatus",
            "description": "<p><i>Only available for students:</i> <code>&quot;ACCEPTED&quot;</code> if the user was screened with success, <code>&quot;REJECTED&quot;</code> if the user was rejected, <code>&quot;UNSCREENED&quot;</code> if the user wasn't screened yet</p>"
          },
          {
            "group": "User Object",
            "type": "string",
            "optional": false,
            "field": "instructorScreeningStatus",
            "description": "<p><i>Only available for students:</i> <code>&quot;ACCEPTED&quot;</code> if the user was screened for group courses with success, <code>&quot;REJECTED&quot;</code> if the user was rejected, <code>&quot;UNSCREENED&quot;</code> if the user wasn't screened yet</p>"
          },
          {
            "group": "User Object",
            "type": "Subject[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>List of subjects</p>"
          },
          {
            "group": "User Object",
            "type": "Match[]",
            "optional": false,
            "field": "matches",
            "description": "<p>List of current matches</p>"
          },
          {
            "group": "User Object",
            "type": "ProjectMatch[]",
            "optional": false,
            "field": "projectMatches",
            "description": "<p>List of current project matches</p>"
          },
          {
            "group": "User Object",
            "type": "Match[]",
            "optional": false,
            "field": "dissolvedMatches",
            "description": "<p>List of dissolved (past) matches</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "lastUpdatedSettingsViaBlocker",
            "description": "<p>The unix timestamp of when some settings were last updated by a blocking popup (aka &quot;blocker&quot;) in the frontend</p>"
          },
          {
            "group": "User Object",
            "type": "number",
            "optional": false,
            "field": "registrationDate",
            "description": "<p>The unix timestamp of when the user registered</p>"
          },
          {
            "group": "User Object",
            "type": "ExpertData",
            "optional": false,
            "field": "expertData",
            "description": "<p><i>Only available for students (optional):</i> Expert specific data</p>"
          }
        ],
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ],
        "Match Object": [
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>Unique identifier for the Match</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "grade",
            "description": "<p><i>only available for students:</i> Grade of the pupil</p>"
          },
          {
            "group": "Match Object",
            "type": "string[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>Subjects of the matched partner</p>"
          },
          {
            "group": "Match Object",
            "type": "string",
            "optional": false,
            "field": "jitsilink",
            "description": "<p>Link to the Jitsi session</p>"
          },
          {
            "group": "Match Object",
            "type": "number",
            "optional": false,
            "field": "date",
            "description": "<p>Unix timestamp of when these persons were matched</p>"
          }
        ],
        "ExpertData Object": [
          {
            "group": "ExpertData Object",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier for the ExpertData.</p>"
          },
          {
            "group": "ExpertData Object",
            "type": "string",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>Email adress specific for contacting the expert.</p>"
          },
          {
            "group": "ExpertData Object",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><em>(optional)</em> Description given by the expert on his expertise</p>"
          },
          {
            "group": "ExpertData Object",
            "type": "string[]",
            "optional": false,
            "field": "expertiseTags",
            "description": "<p>Tags which describe the expert's fields of expertise</p>"
          },
          {
            "group": "ExpertData Object",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Indicates whether the expert agrees on publishing his data on the platform</p>"
          },
          {
            "group": "ExpertData Object",
            "type": "string",
            "optional": false,
            "field": "allowed",
            "description": "<p>Indicates whether the publishing is allowed by Corona School staff. One of <code>&quot;pending&quot;, &quot;yes&quot;, &quot;no&quot;</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"some-kind-of-userid\",\n    \"firstname\": \"John\",\n    \"lastname\": \"Doe\",\n    \"email\": \"john.doe@example.com\",\n    \"type\": \"pupil\",\n    \"isTutor\": false,\n    \"isInstructor\": false,\n    \"isPupil\": true,\n    \"isParticipant\": false,\n    \"isProjectCoachee\": false,\n    \"active\": true,\n    \"grade\": 7,\n    \"subjects\": [\n        {\n            \"name\": \"Chinesisch\",\n            \"minGrade\": 1,\n            \"maxGrade\": 13\n        }\n    ],\n    \"matches\": [\n        {\n            \"firstname\": \"Jane\",\n            \"lastname\": \"Doe\",\n            \"email\": \"jane.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"date\": 1590834509\n        }\n    ],\n    \"dissolvedMatches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Appleseed\",\n            \"email\": \"john.appleseed@example.com\",\n            \"uuid\": \"1a215b2f-ef17-44f8-a38d-6bcec820a8cf\",\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-1a215b2f-ef17-44f8-a38d-6bcec820a8cf\",\n            \"date\": 1590834509\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Student",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"userid-of-some-kind\",\n    \"firstname\": \"Jane\",\n    \"lastname\": \"Doe\",\n    \"email\": \"jane.doe@example.com\",\n    \"type\": \"student\",\n    \"isTutor\": true,\n    \"isInstructor\": false,\n    \"isPupil\": false,\n    \"isParticipant\": false,\n    \"isProjectCoach\": false,\n    \"active\": true,\n    \"screeningStatus\": \"ACCEPTED\",\n    \"instructorScreeningStatus\": \"ACCEPTED\",\n    \"projectCoachingScreeningStatus\": \"ACCEPTED\",\n    \"matchesRequested\": 1,\n    \"projectMatchesRequested\": 1,\n    \"subjects\": [\n        {\n            \"name\": \"Chinesisch\",\n            \"minGrade\": 5,\n            \"maxGrade\": 8\n        }\n    ],\n    \"matches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Doe\",\n            \"email\": \"john.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"grade\": 6,\n            \"subjects\": [\n                \"Englisch\",\n                \"Chinesisch\"\n            ]\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"date\": 1590834509\n        }\n    ],\n    \"dissolvedMatches\": [\n        {\n            \"firstname\": \"Jane\",\n            \"lastname\": \"Appleseed\",\n            \"email\": \"jane.appleseed@example.com\",\n            \"uuid\": \"24a93ed5-4bfe-4969-adae-b6cceaf0d1a0\",\n            \"grade\": 9,\n            \"subjects\": [\n                \"Mathematik\",\n                \"Englisch\"\n            ],\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-24a93ed5-4bfe-4969-adae-b6cceaf0d1a0\",\n            \"date\": 1590834509\n        }\n    ],\n    \"projectMatches\": [\n        {\n            \"firstname\": \"John\",\n            \"lastname\": \"Doe\",\n            \"email\": \"john.doe@example.com\",\n            \"uuid\": \"af7392d74-8d7f-9083-0973-fda9b8e0f9f\",\n            \"grade\": 6,\n            \"projectFields\": [\n                \"Arbeitswelt\",\n                \"Chemie\"\n            ]\n            \"jitsilink\": \"https://meet.jit.si/CoronaSchool-ProjectCoaching-adl792d76-8d7f-9083-0973-a8d9b8e0d2j\",\n            \"date\": 1590834509,\n            \"projectMemberCount\": 2,\n            \"jufoParticipation\": \"yes\",\n            \"dissolved\": false\n        }\n    ],\n    \"expertData\": {\n        \"id\": 2,\n        \"contactEmail\": \"contact@jufo-tufo.de\",\n        \"description\": null,\n        \"expertiseTags\": [\n            \"LTE\",\n            \"Glasfaser\"\n        ],\n        \"active\": true,\n        \"allowed\": true\n    },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "200",
            "description": "<p>The request was successful and contains a response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "OK",
          "content": "HTTP/1.1 200 OK\n(response)",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/:id/role/instructor",
    "title": "postUserRoleInstructor",
    "version": "1.1.0",
    "description": "<p>Add the instructor role to the current user.</p> <p>The user has to be authenticated.</p>",
    "name": "postUserRoleInstructor",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>/role/instructor",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Instructor Object": [
          {
            "group": "Instructor Object",
            "type": "bool",
            "optional": false,
            "field": "isOfficial",
            "description": "<p>True, if user is looking for something official</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: State, one of <code>&quot;bw&quot;, &quot;by&quot;, &quot;be&quot;, &quot;bb&quot;, &quot;hb&quot;, &quot;hh&quot;, &quot;he&quot;, &quot;mv&quot;, &quot;ni&quot;, &quot;nw&quot;, &quot;rp&quot;, &quot;sl&quot;, &quot;sn&quot;, &quot;st&quot;, &quot;sh&quot;, &quot;th&quot;, &quot;other&quot;</code>)</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "university",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: University</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "module",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: Module, one of <code>&quot;internship&quot;, &quot;seminar&quot;, &quot;other&quot;</code></p>"
          },
          {
            "group": "Instructor Object",
            "type": "int",
            "optional": false,
            "field": "hours",
            "description": "<p><em>required if</em> <code>isOfficial = true</code>: Hours needed &gt; 0</p>"
          },
          {
            "group": "Instructor Object",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>Additional information</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/:id/role/tutor",
    "title": "postUserRoleTutor",
    "version": "1.1.0",
    "description": "<p>Add the tutor role to the current user by supplying subjects for matching.</p> <p>The user has to be authenticated.</p>",
    "name": "postUserRoleInstructor",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>/role/tutor",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/:id/role/projectcoach",
    "title": "postUserRoleProjectCoach",
    "version": "1.1.0",
    "description": "<p>Add the project coach role to the current user by supplying project fields for matching.</p> <p>The user has to be authenticated.</p>",
    "name": "postUserRoleProjectCoach",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>/role/projectcoach",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "projectFields",
            "description": "<p>Array of project field objects (can contain grade information in the usual format)</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "wasJufoParticipant",
            "description": "<p>One of <code>&quot;yes&quot;, &quot;no&quot;, &quot;idk&quot;</code></p>"
          },
          {
            "group": "Body",
            "type": "bool",
            "optional": true,
            "field": "isUniversityStudent",
            "description": "<p>Indicates if officially enrolled in a university</p>"
          },
          {
            "group": "Body",
            "type": "bool",
            "optional": true,
            "field": "hasJufoCertificate",
            "description": "<p>If <code>true</code> the person has a jufo certificate</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "jufoPastParticipationInfo",
            "description": "<p>Info on the past jufo participation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/:id/role/projectcoachee",
    "title": "postUserRoleProjectCoachee",
    "version": "1.1.0",
    "description": "<p>Add the project coachee role to the current user by supplying project fields for matching.</p> <p>The user has to be authenticated.</p>",
    "name": "postUserRoleProjectCoachee",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X POST -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>/role/projectcoachee",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "projectFields",
            "description": "<p>Array of project field identifiers, one of <code>&quot;Arbeitswelt&quot;, &quot;Biologie&quot;, &quot;Chemie&quot;, &quot;Geo-und-Raumwissenschaften&quot;, &quot;Mathematik/Informatik&quot;, &quot;Physik&quot;, &quot;Technik&quot;</code></p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "isJufoParticipant",
            "description": "<p>One of <code>&quot;yes&quot;, &quot;no&quot;, &quot;unsure&quot;, &quot;neverheard&quot;</code></p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": false,
            "field": "projectMemberCount",
            "description": "<p>Number indicating the number of project members (can be either 1, or 2 or 3)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/user/:id",
    "title": "putUser",
    "version": "1.1.0",
    "description": "<p>Set personal data of the user.</p> <p>This endpoint allows editing some of the personal information of the specified user. The user has to be authenticated and can only edit his own information.</p>",
    "name": "putUser",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/user/<ID>/personal -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ],
        "User Personal": [
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "User Personal",
            "type": "number",
            "optional": false,
            "field": "grade",
            "description": "<p><i>Only for pupils:</i> Grade of the pupil</p>"
          },
          {
            "group": "User Personal",
            "type": "number",
            "optional": false,
            "field": "matchesRequested",
            "description": "<p><i>Only for students:</i> Number of total match requests. A student may request at most 2 matches at a time and may have at most a total of 4 matches at the same time</p>"
          },
          {
            "group": "User Personal",
            "type": "number",
            "optional": true,
            "field": "projectMatchesRequested",
            "description": "<p>Number of total project match requests. A student may request at most 2 matches at a time and may have at most a total of 4 matches at the same time</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>the student's/pupil's state</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "university",
            "description": "<p><i>Only for students:</i> student's university</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "schoolType",
            "description": "<p><i>Only for pupils:</i> School Type of the pupil</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "division",
            "description": "<p><i>Only for mentors:</i> Division of the mentor</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "expertise",
            "description": "<p><i>Only for mentors:</i> Expertise of the mentor</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "subjects",
            "description": "<p><i>Only for mentors:</i> Subjects of the mentor</p>"
          },
          {
            "group": "User Personal",
            "type": "boolean",
            "optional": false,
            "field": "teachingExperience",
            "description": "<p><i>Only for mentors:</i> Teaching experience of the mentor</p>"
          },
          {
            "group": "User Personal",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p><i>Only for mentors:</i> Description of the mentor</p>"
          },
          {
            "group": "User Personal",
            "type": "number",
            "optional": false,
            "field": "lastUpdatedSettingsViaBlocker",
            "description": "<p>The unix timestamp of when some settings were last updated by a blocking popup (aka &quot;blocker&quot;) that should be set by the frontend</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil",
          "content": "{\n    \"firstname\": \"John\",\n    \"lastname\": \"Doe\",\n    \"grade\": 3\n}",
          "type": "json"
        },
        {
          "title": "Student",
          "content": "{\n    \"firstname\": \"Jane\",\n    \"lastname\": \"Doe\",\n    \"matchesRequested\": 0\n}",
          "type": "json"
        },
        {
          "title": "Mentor",
          "content": "{\n    \"firstname\": \"Frank N.\",\n    \"lastname\": \"Stein\",\n    \"division\": [\"video\", \"supervision\"],\n    \"expertise\": [\"technical support\"],\n    \"subjects\": [\n        {\"name\": \"Englisch\", \"minGrade\": 1, \"maxGrade\": 13}\n    ],\n    \"teachingExperience\": false,\n    \"description\": \"I like trains\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/user/:id/active/:active",
    "title": "putUserActive",
    "version": "1.1.0",
    "description": "<p>Set the active status of the user.</p> <p><b>Active</b>: This means the user will get new matches regularly<br/> <b>Inactive:</b> This means all existing matches will be dissolved and the user won't get any new matches.</p> <p>The user has to be authenticated and can only edit his own subjects.</p>",
    "name": "putUserActive",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" https://api.corona-school.de/api/user/<ID>/active/<ACTIVE>",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "active",
            "description": "<p>Either <code>&quot;true&quot;</code> or <code>&quot;false&quot;</code></p>"
          }
        ],
        "User Subjects": [
          {
            "group": "User Subjects",
            "type": "Subject[]",
            "optional": true,
            "field": "root",
            "description": "<p>Array of subjects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil",
          "content": "[\n    {\n        \"name\": \"Chemie\"\n    },\n    {\n        \"name\": \"Physik\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "Student",
          "content": "[\n    {\n        \"name\": \"Chemie\",\n        \"minGrade\": 1,\n        \"maxGrade\": 4\n    },\n    {\n        \"name\": \"Physik\",\n        \"minGrade\": 10,\n        \"maxGrade\": 13\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/user/:id/projectFields",
    "title": "putUserProjectFields",
    "version": "1.1.0",
    "description": "<p>Set the project fields of the user.</p> <p>This endpoint allows editing of the user's project fields. Please be aware, that students and pupils have different project field formats (students have additional grade restrictions). The user has to be authenticated and can only edit his own project fields.</p> <p>The project fields are given as an array of ProjectField objects in the request's body.</p>",
    "name": "putUserProjectFields",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/user/<ID>/projectFields -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/user/:id/subjects",
    "title": "putUserSubjects",
    "version": "1.1.0",
    "description": "<p>Set the subjects of the user.</p> <p>This endpoint allows editing of the user subjects. Please be aware, that students and pupils have different subject formats. The user has to be authenticated and can only edit his own subjects.</p> <p>Adding subjects to a participant or instructor automatically makes them tutee or tutor.</p>",
    "name": "putUserSubjects",
    "group": "User",
    "examples": [
      {
        "title": "Curl",
        "content": "curl -k -i -X PUT -H \"Token: <AUTHTOKEN>\" -H \"Content-Type: application/json\" https://api.corona-school.de/api/user/<ID>/subjects -d \"<REQUEST>\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameter": [
          {
            "group": "URL Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ],
        "User Subjects": [
          {
            "group": "User Subjects",
            "type": "Subject[]",
            "optional": true,
            "field": "root",
            "description": "<p>Array of subjects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pupil",
          "content": "[\n    {\n        \"name\": \"Chemie\"\n    },\n    {\n        \"name\": \"Physik\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "Student",
          "content": "[\n    {\n        \"name\": \"Chemie\",\n        \"minGrade\": 1,\n        \"maxGrade\": 4\n    },\n    {\n        \"name\": \"Physik\",\n        \"minGrade\": 10,\n        \"maxGrade\": 13\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/controllers/userController/index.ts",
    "groupTitle": "",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authentication",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>HTTP Header: Authentication Token of a valid user</p>"
          }
        ],
        "HTTP Header": [
          {
            "group": "HTTP Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/json</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token",
          "content": "Token: longAuthenticationToken_With_Var10u5_Ch4r4ct3r5",
          "type": "json"
        },
        {
          "title": "Content-Type",
          "content": "Content-Type: application/json",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Subject Object": [
          {
            "group": "Subject Object",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the subject</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "minGrade",
            "description": "<p><i>Only available for students:</i> Minimum grade they want to teach</p>"
          },
          {
            "group": "Subject Object",
            "type": "number",
            "optional": false,
            "field": "maxGrade",
            "description": "<p><i>Only available for students:</i> Maximum grade they want to teach</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "HTTP Status Codes": [
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "204",
            "description": "<p>The request was successful, but generated no response</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "400",
            "description": "<p>The request was malformed and thus rejected</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "403",
            "description": "<p>The user is not authenticated</p>"
          },
          {
            "group": "HTTP Status Codes",
            "optional": false,
            "field": "500",
            "description": "<p>This should not happen. Report this issue to the maintainer or ask your favorite superhero for help.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 No Content\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 403 Unauthorized\n(empty body)",
          "type": "empty"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n(empty body)",
          "type": "empty"
        }
      ]
    }
  }
] });
