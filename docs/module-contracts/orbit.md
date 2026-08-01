# Orbit Capability Contract

# Module

Name: Orbit
Version: 0.1.0
Status: planned

---

# Purpose

Orbit manages daily routines, reminders, and scheduled tasks, maintaining the rhythm of the user's schedule.

---

# Responsibilities

* Scheduled briefing generation and preparation for delivery.
* Email automation and scheduling.
* Cron job management.
* Routine templates (morning, evening, travel).

---

# Reads

* Calendar events, tasks, routines templates.
* User briefing preferences.

---

# Writes

* Schedules, triggers, reminders, prepared briefings.

---

# Inputs

* Cron trigger / timer ticks.
* Routine creation requests.
* Calendar and task data.

---

# Outputs

* Due reminders (passed to Eywa).
* Prepared briefing packages.

---

# Autonomous Actions

* Generate scheduled daily briefings in the background.
* Evaluate schedules and trigger due reminders.

---

# Approval Required

* Sending notifications or emails to external destinations.

---

# Forbidden Actions

* Directly modifying wardrobe inventory or other domain records outside scheduling.

---

# Dependencies

* None (all cross-domain notifications are orchestrated via Eywa).

---

# Events Consumed

* `CalendarEventCreated`
* `CalendarEventCancelled`
* `TaskCompleted`

---

# Events Produced

* `BriefingGenerated`
* `ReminderTriggered`

---

# Failure Modes

* Scheduler thread halts: checkpointing execution timestamps to process missed schedules on restart.

---

# Metrics

* Reminder delivery latency (time between expected and actual trigger time).

---

# Future Scope

* Adaptive schedules based on historical daily rhythm.
