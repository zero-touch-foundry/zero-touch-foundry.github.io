---
sidebar_position: 1
title: What is a Management Server? 
hide_table_of_contents: true
---

The Stack Automation Management Server is a small piece of code (an agent) which is installed on your cloud and is used to communicate between your Stack Automation SAAS tenant and your cloud.
The management server uses only outbound communication with Stack Automation SAAS. It is stateless and very thin.
The management server is intended to be "always on" and runs all the time, checking with Stack Automation for new tasks to perform.

When it receives a message about a new task (e.g. when a deployment starts) it will spawn one or more runners that will launch the specific grain and then terminate. Runners may not need to be spawned if a suitable runner is already running.

The following diagram depicts the connectivity between the agent and Stack Automation SAAS:

import pic1 from '/img/agent_connectivity.png';

<img src={pic1} style={{width: 900}} />