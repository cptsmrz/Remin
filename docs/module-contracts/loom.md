# Loom Capability Contract

# Module

Name: Loom
Version: 0.1.0
Status: planned

---

# Purpose

Loom handles data import, export, and synchronization between the Git repository and the database.

---

# Responsibilities

* JSON/Markdown to database sync.
* Database to JSON/Markdown export.
* CSV and bulk import.
* Data migration utilities.

---

# Reads

* Local directory files (JSON, Markdown, CSV).
* Active database structure.

---

# Writes

* Synced database records.
* Exported JSON/Markdown files.

---

# Inputs

* File streams, import trigger configs.
* Sync target endpoints.

---

# Outputs

* Synced record metrics.
* Generated output files.

---

# Autonomous Actions

* Validate file schemas during import.
* Maintain validation mismatch logs.

---

# Approval Required

* Overwriting local repository files during synchronization.

---

# Forbidden Actions

* Executing business logic or interpreting user intent.

---

# Dependencies

* None (acts purely as a data adapter, coordinated via Eywa).

---

# Events Consumed

* `SyncStarted`
* `SyncCompleted`

---

# Events Produced

* `SyncFailed`
* `BackupCreated`

---

# Failure Modes

* Schema mismatch during sync: abort sync, rollback transactions, and log warnings.

---

# Metrics

* Schema validation error rate.
* Average synchronization time.

---

# Future Scope

* Visual conflict resolution tools.
