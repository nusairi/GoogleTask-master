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
        "NewCucuTask1",
        "muthulakshmi88\u0027s list"
      ],
      "line": 12,
      "id": "googletask-service;create-task;;2"
    },
    {
      "cells": [
        "NewCucuTask2",
        "muthulakshmi88\u0027s list"
      ],
      "line": 13,
      "id": "googletask-service;create-task;;3"
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
  "name": "he requested task \"NewCucuTask1\" creation under taskList \"muthulakshmi88\u0027s list\"",
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
  "location": "GetBasicAuth.valid_google_user_login()"
});
formatter.result({
  "duration": 1961567514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucuTask1",
      "offset": 19
    },
    {
      "val": "muthulakshmi88\u0027s list",
      "offset": 58
    }
  ],
  "location": "GetBasicAuth.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 762519767,
  "status": "passed"
});
formatter.match({
  "location": "GetBasicAuth.the_task_should_be_created()"
});
formatter.result({
  "duration": 579874117,
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
  "name": "he requested task \"NewCucuTask2\" creation under taskList \"muthulakshmi88\u0027s list\"",
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
  "location": "GetBasicAuth.valid_google_user_login()"
});
formatter.result({
  "duration": 4668485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucuTask2",
      "offset": 19
    },
    {
      "val": "muthulakshmi88\u0027s list",
      "offset": 58
    }
  ],
  "location": "GetBasicAuth.fetch_task_lists(String,String)"
});
formatter.result({
  "duration": 338397017,
  "status": "passed"
});
formatter.match({
  "location": "GetBasicAuth.the_task_should_be_created()"
});
formatter.result({
  "duration": 593842624,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Move Task",
  "description": "",
  "id": "googletask-service;move-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sunny"
    },
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he requested to move the task \"\u003cTaskTitle\u003e\" under taskList \"\u003cTaskListName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the task should be moved",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "googletask-service;move-task;",
  "rows": [
    {
      "cells": [
        "TaskTitle",
        "TaskListName"
      ],
      "line": 23,
      "id": "googletask-service;move-task;;1"
    },
    {
      "cells": [
        "NewTask_POC1",
        "muthulakshmi88\u0027s list"
      ],
      "line": 24,
      "id": "googletask-service;move-task;;2"
    },
    {
      "cells": [
        "NewTask_POC3",
        "muthulakshmi88\u0027s list"
      ],
      "line": 25,
      "id": "googletask-service;move-task;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Move Task",
  "description": "",
  "id": "googletask-service;move-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he requested to move the task \"NewTask_POC1\" under taskList \"muthulakshmi88\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the task should be moved",
  "keyword": "Then "
});
formatter.match({
  "location": "GetBasicAuth.valid_google_user_login()"
});
formatter.result({
  "duration": 2609293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewTask_POC1",
      "offset": 31
    },
    {
      "val": "muthulakshmi88\u0027s list",
      "offset": 61
    }
  ],
  "location": "GetBasicAuth.fetch_task_lists_to_move(String,String)"
});
formatter.result({
  "duration": 786346200,
  "status": "passed"
});
formatter.match({
  "location": "GetBasicAuth.the_task_should_be_moved()"
});
formatter.result({
  "duration": 562858695,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Move Task",
  "description": "",
  "id": "googletask-service;move-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Sunny"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a valid google user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he requested to move the task \"NewTask_POC3\" under taskList \"muthulakshmi88\u0027s list\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the task should be moved",
  "keyword": "Then "
});
formatter.match({
  "location": "GetBasicAuth.valid_google_user_login()"
});
formatter.result({
  "duration": 3260385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewTask_POC3",
      "offset": 31
    },
    {
      "val": "muthulakshmi88\u0027s list",
      "offset": 61
    }
  ],
  "location": "GetBasicAuth.fetch_task_lists_to_move(String,String)"
});
formatter.result({
  "duration": 773528393,
  "status": "passed"
});
formatter.match({
  "location": "GetBasicAuth.the_task_should_be_moved()"
});
formatter.result({
  "duration": 615931718,
  "status": "passed"
});
});