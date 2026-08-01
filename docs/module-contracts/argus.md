# Argus Capability Contract

# Module

Name: Argus
Version: 0.1.0
Status: planned

---

# Purpose

Argus tracks stock levels, expiry dates, and inventory health to notify the user of inventory events.

---

# Responsibilities

* Low stock alerts for consumables.
* Expiry date tracking.
* Inventory value monitoring.
* Laundry status tracking.

---

# Reads

* Consumables logs, item purchase dates, expiry fields, wear count.
* Laundry status records.

---

# Writes

* Stock alerts, expiry warnings, item laundry status updates.

---

# Inputs

* Wear history updates.
* Inventory updates.

---

# Outputs

* Stock level notifications.
* Expiry and laundry list alerts.

---

# Autonomous Actions

* Mark items as dirty automatically when a wear event occurs.
* Detect and flag consumables that fall below threshold levels.

---

# Approval Required

* Creating purchase orders or external restock recommendations.

---

# Forbidden Actions

* Modifying calendar schedules or calendar event databases.

---

# Dependencies

* None (all external alerts are dispatched via Eywa).

---

# Events Consumed

* `ItemWorn`
* `ItemWashed`
* `ItemPurchased`

---

# Events Produced

* `AlertTriggered`
* `StockLow`

---

# Failure Modes

* Failure in tracking logic: default to safe alerts and prompt user validation.

---

# Metrics

* False positive/negative warning rate.
* Alert latency.

---

# Future Scope

* Predictive replenishment using historical consumption rates.
