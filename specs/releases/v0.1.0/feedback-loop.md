# Remin — Feedback Loop Specification

> "Every decision teaches the system."

---

# Purpose

The Feedback Loop enables Remin to improve recommendations by learning from user behavior while preserving predictability and user trust.

Learning should be gradual, explainable, and reversible.

---

# User Problem

Personal preferences change over time.

Static recommendation systems quickly become repetitive or irrelevant.

The Feedback Loop allows Remin to adapt without becoming unstable.

---

# Goals

The Feedback Loop should:

- Capture user decisions.
- Distinguish temporary choices from long-term preferences.
- Learn gradually.
- Improve recommendation quality.
- Preserve explainability.

---

# Non-Goals

This specification does not define:

- Machine learning models.
- Neural networks.
- LLM prompts.
- Recommendation algorithms.

---

# Feedback Sources

Feedback may include:

- Recommendation acceptance.
- Recommendation rejection.
- Rejection reason.
- Outfit modifications.
- End-of-day rating.
- Wear frequency.
- Manual preference updates.

---

# User Interaction

When rejecting a recommendation, the user may:

- Reject without explanation.
- Indicate a temporary mood.
- Provide a specific reason.
- Request an alternative.

These interactions should influence future recommendations with appropriate weight.

---

# Learning Principles

The Feedback Loop should:

- Learn from patterns.
- Ignore isolated anomalies.
- Respect manual corrections.
- Remain explainable.
- Preserve user control.

---

# Acceptance Criteria

The Feedback Loop is complete when:

- Recommendation outcomes are recorded.
- Temporary and permanent feedback are distinguished.
- Future recommendations reflect long-term patterns.
- Users can manually override learned preferences.
- Learning history is preserved.

---

# Future Extensions

Future versions may include:

- Confidence scoring.
- Seasonal preference models.
- Occasion-specific preferences.
- Travel profiles.
- Collaborative learning across domains.

---

# Closing Principle

The goal is not to predict the user.

The goal is to understand the user a little better after every interaction.