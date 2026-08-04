# Remin — Wardrobe Specification

> "Know everything you own. Wear it intentionally."

---

# Purpose

The wardrobe system is the foundation of Remin.

It enables users to understand their clothing collection, receive contextual outfit recommendations, and maintain an accurate representation of what they own.

The wardrobe is not a gallery of clothing.

It is a decision-support system.

---

# User Problem

Choosing what to wear is a repeated decision.

Most people:

- Forget what they own.
- Repeat the same outfits.
- Neglect parts of their wardrobe.
- Lose track of laundry.
- Experience decision fatigue.

Remin exists to reduce that friction.

---

# Goals

The wardrobe system should enable the user to:

- Maintain an accurate clothing inventory.
- Understand the current state of every item.
- Receive thoughtful outfit recommendations.
- Track clothing usage.
- Build long-term preference understanding.
- Reduce decision fatigue.

---

# Non-Goals

This specification does not define:

- Recommendation algorithms.
- Inventory implementation.
- Laundry workflow implementation.
- Notification scheduling.

These are specified separately.

---

# User Journey

A typical user journey includes:

1. Add clothing items.
2. Organize the wardrobe.
3. Receive daily recommendations.
4. Select an outfit.
5. Wear the outfit.
6. Record changes.
7. Complete laundry.
8. Provide feedback.
9. Improve future recommendations.

---

# Core Capabilities

The wardrobe system provides:

- Clothing inventory awareness.
- Outfit composition.
- Context-aware recommendations.
- Clothing lifecycle tracking.
- User feedback collection.
- Historical wardrobe insights.

---

# Principles

The wardrobe follows the product design principles defined in:

- `specs/design-principles.md`

Recommendations should:

- Reduce cognitive load.
- Respect user choice.
- Learn gradually.
- Remain explainable.

---

# Acceptance Criteria

The Wardrobe specification is complete when:

- Users can access and manage their clothing inventory through the wardrobe experience.
- Current clothing availability is accurately reflected.
- Outfit recommendations are available through the wardrobe experience.
- User interactions are delegated to the appropriate supporting systems.
- Historical wardrobe information remains accessible.

---

# Success Criteria

The wardrobe experience is successful when:

- Users trust the inventory.
- Recommendations become more relevant over time.
- Clothing history remains accurate.
- Daily outfit selection becomes easier.

---

# Related Specifications

This specification is supported by:

- inventory.md
- recommendation-engine.md
- laundry.md
- feedback-loop.md
- notifications.md

---

# Closing Principle

The wardrobe should become a trusted memory rather than a static inventory.