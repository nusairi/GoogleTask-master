$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getA1BasicAuth.feature");
formatter.feature({
  "line": 1,
  "name": "GoogleTask service",
  "description": "Authentication should be provided",
  "id": "googletask-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create Task",
  "description": "",
  "id": "googletask-service;create-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sunny"
    },
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he requested task \"\u003cNewTaskTitle\u003e\" creation under taskList \"\u003cTaskListName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the task should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "googletask-service;create-task;",
  "rows": [
    {
      "cells": [
        "NewTaskTitle",
        "TaskListName"
      ],
      "line": 11,
      "id": "googletask-service;create-task;;1"
    },
    {
      "cells": [
        "CucuTask1",
        "Mir\u0027s list"
      ],
      "line": 12,
      "id": "googletask-service;create-task;;2"
    },
    {
      "cells": [
        "CucuTask2",
        "Mir\u0027s list"
      ],
      "line": 13,
      "id": "googletask-service;create-task;;3"
    },
    {
      "cells": [
        "CucuTask3",
        "Mir\u0027s list"
      ],
      "line": 14,
      "id": "googletask-service;create-task;;4"
    },
    {
      "cells": [
        "CucuTask4",
        "Mir\u0027s list"
      ],
      "line": 15,
      "id": "googletask-service;create-task;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Create Task",
  "description": "",
  "id": "googletask-service;create-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he requested task \"CucuTask1\" creation under taskList \"Mir\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the task should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTaskTest.valid_google_user_login()"
});
formatter.result({
  "duration": 1216515962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucuTask1",
      "offset": 19
    },
    {
      "val": "Mir\u0027s list",
      "offset": 55
    }
  ],
  "location": "GoogleTaskTest.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 702399862,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTaskTest.the_task_should_be_created()"
});
formatter.result({
  "duration": 361014712,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Task",
  "description": "",
  "id": "googletask-service;create-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he requested task \"CucuTask2\" creation under taskList \"Mir\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the task should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTaskTest.valid_google_user_login()"
});
formatter.result({
  "duration": 2246522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucuTask2",
      "offset": 19
    },
    {
      "val": "Mir\u0027s list",
      "offset": 55
    }
  ],
  "location": "GoogleTaskTest.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 235898373,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTaskTest.the_task_should_be_created()"
});
formatter.result({
  "duration": 477599440,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create Task",
  "description": "",
  "id": "googletask-service;create-task;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he requested task \"CucuTask3\" creation under taskList \"Mir\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the task should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTaskTest.valid_google_user_login()"
});
formatter.result({
  "duration": 2407047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucuTask3",
      "offset": 19
    },
    {
      "val": "Mir\u0027s list",
      "offset": 55
    }
  ],
  "location": "GoogleTaskTest.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 294879432,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTaskTest.the_task_should_be_created()"
});
formatter.result({
  "duration": 455081258,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create Task",
  "description": "",
  "id": "googletask-service;create-task;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he requested task \"CucuTask4\" creation under taskList \"Mir\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the task should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTaskTest.valid_google_user_login()"
});
formatter.result({
  "duration": 1869638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucuTask4",
      "offset": 19
    },
    {
      "val": "Mir\u0027s list",
      "offset": 55
    }
  ],
  "location": "GoogleTaskTest.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 185269104,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTaskTest.the_task_should_be_created()"
});
formatter.result({
  "duration": 368697719,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Move Task",
  "description": "",
  "id": "googletask-service;move-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sunny"
    },
    {
      "line": 19,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "he requested to move the task \"\u003cTaskTitle\u003e\" under taskList \"\u003cTaskListName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the task should be moved",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "googletask-service;move-task;",
  "rows": [
    {
      "cells": [
        "TaskTitle",
        "TaskListName"
      ],
      "line": 26,
      "id": "googletask-service;move-task;;1"
    },
    {
      "cells": [
        "CucuTask3",
        "Mir\u0027s list"
      ],
      "line": 27,
      "id": "googletask-service;move-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Move Task",
  "description": "",
  "id": "googletask-service;move-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sanity"
    },
    {
      "line": 19,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "he requested to move the task \"CucuTask3\" under taskList \"Mir\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the task should be moved",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTaskTest.valid_google_user_login()"
});
formatter.result({
  "duration": 1982128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucuTask3",
      "offset": 31
    },
    {
      "val": "Mir\u0027s list",
      "offset": 58
    }
  ],
  "location": "GoogleTaskTest.fetch_task_lists_to_move(String,String)"
});
formatter.result({
  "duration": 514216273,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTaskTest.the_task_should_be_moved()"
});
formatter.result({
  "duration": 449892333,
  "status": "passed"
});
});