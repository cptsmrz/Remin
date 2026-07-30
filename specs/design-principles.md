# Remin — Design Principles

> "Design for clarity, not complexity."

---

# Purpose

These principles define how every feature in Remin should behave from the user's perspective.

They guide product decisions independently of technology, implementation, or interface.

Whenever two design choices conflict, these principles should help determine the better solution.

---

# Core Principles

## 1. Reduce Cognitive Load

Every feature should reduce the number of decisions the user has to make.

Complexity belongs inside the system, not in the user's mind.

---

## 2. Recommendations Over Search

Whenever possible, Remin should recommend rather than require the user to search.

Present thoughtful suggestions before presenting large collections.

---

## 3. Two Choices Are Better Than Ten

Present a small number of high-quality recommendations.

Too many options increase decision fatigue.

Quality is preferred over quantity.

---

## 4. AI Recommends. The User Decides.

Artificial intelligence exists to assist.

The user always retains final authority.

Important decisions should never be made silently.

---

## 5. Explain Only When Asked

Default interactions should remain concise.

Reasoning should always be available but should not overwhelm the user.

---

## 6. Learn From Patterns, Not Exceptions

One unusual decision should not redefine long-term preferences.

Remin should adapt gradually and deliberately.

---

## 7. Context Before Confidence

Recommendations should consider context before certainty.

Examples include:

- Weather
- Calendar
- Laundry state
- Wear history
- User feedback

Context improves relevance.

---

## 8. Trust Over Cleverness

Users should understand why Remin made a recommendation.

Explainable reasoning is preferred over opaque optimization.

---

## 9. Preserve User Agency

Remin should encourage thoughtful decisions rather than automate them unnecessarily.

Automation must always respect user control.

---

## 10. Make Reversible Decisions

Whenever practical:

- Undo
- Restore
- Archive

Deletion should be exceptional.

---

## 11. Consistency Over Novelty

Interactions should become familiar over time.

Predictability builds trust.

---

## 12. Build for Years, Not Weeks

Every feature should support long-term use.

Temporary convenience should never compromise future maintainability.

---

# Design Questions

Before implementing any feature, ask:

- Does this reduce mental effort?
- Does this respect user agency?
- Is the recommendation understandable?
- Can the user reverse the action?
- Does it fit Remin's philosophy?

If the answer to any question is "no", reconsider the design.

---

# Closing Principle

The best feature is not the one with the most functionality.

It is the one that quietly helps the user make better decisions with less effort.