# Whatsapp Task Manager
> By Akshay Gudhate

> New age task management app using whatsapp. Created with ----> React, Node, Postgres, Golang, RabbitMQ.

This project has 4 major modules *server*, *web*, *cron* connected via *Go Bridge(messaging)*.

## Features:
- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
> Current Version
- Add todo via *website* and *whatsapp*.
- Get list of *pending* and *completed* todo's.
- Get *daily pending todo list* for the vai via whatsapp as per priority.
- Get *todo notification* just 2 minutes before time.
- Chat bot has feature of *Add Todo* and *Pending Todo List*.
- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
> Upcoming Version
- Group Todo's
- Create and Assign Todo's
- Check current status of Todo's
- -----------------------------------------------------------------------------------------------------------------------------------------------------------------
> Database Tables
* User ---> user_id, first_name, last_name, phone, timestamp
* User State ---> user_id, state
* Todo ---> todo_id, subject, todo_text, priority(high, medium, low), is_completed, timestamp_scheduled, timestamp_created
* View of task and user db combined.
- -----------------------------------------------------------------------------------------------------------------------------------------------------------------